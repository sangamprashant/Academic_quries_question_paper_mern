const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const QuestionPaper = mongoose.model("ACADEMICQUERIESQUESTIONPAPER");

// Handle file upload endpoint by user
router.post("/api/upload", (req, res) => {
  const { type, subject, year, course, name, path, email } = req.body;
  const questionPaper = new QuestionPaper({
    type: type,
    subject: subject,
    year: year,
    course: course,
    pdfPath: path,
    valid: false,
    name: name,
    email: email,
  });

  questionPaper
    .save()
    .then(() => {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: `"Academic Queries" <${process.env.EMAIL}>`,
        to: email,
        subject: "Question Paper Uploaded Successfully",
        html: `
        <html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: "Arial", sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .header {
      background-color: #007bff;
      color: #fff;
      text-align: center;
      padding: 10px;
      border-radius: 8px 8px 0 0;
    }

    .body {
      padding: 20px;
    }

    .app-title {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
      align-items: center;
    }

    .app-title img {
      border-radius: 50%;
      border: 1px solid rgb(183, 183, 183);
    }

    .footer {
      text-align: center;
      padding: 10px;
      border-top: 1px solid #ccc;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    button {
      display: inline-block;
      margin: 5px;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    h1 {
      margin: 0;
    }

    .thank-you-content {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Question Paper Uploaded</h2>
    </div>

    <div class="body">
      <div class="app-title">
        <img
          src="https://raw.githubusercontent.com/sangamprashant/Academic_quries_question_paper_Next_JS/main/public/logo.png"
          alt="logo"
          style="width: 50px; height: 50px; object-fit: cover"
        />
        <h1>Academic Queries</h1>
      </div>
      <hr/>
      <img
        src="https://raw.githubusercontent.com/sangamprashant/Academic_quries_question_paper_Next_JS/main/public/logo%20aq.png"
        alt="Company Logo"
      />
      <p>
  Thank you, ${name}, for uploading the previous year's question paper. Your
  contribution plays a vital role in helping students prepare for exams
  effectively.
</p>
      <p>
        The uploaded question paper has been received and will be made available
        to students shortly. Your dedication to knowledge sharing is highly
        appreciated.
      </p>
      <p>Best regards,<br />Academic Queries</p>
      <p>
      ${process.env.DOMAIN
        ? `<a href="${process.env.DOMAIN}" target="_blank"
            ><button>Visit Our Website</button></a>`
        : ""}
      ${process.env.AMAZON_LINK
        ? `<a href="${process.env.AMAZON_LINK}" target="_blank"
            ><button style="background-color: #28a745">
              Download from Amazon Appstore
            </button></a>`
        : ""}
      ${process.env.DRIVE_LINK
        ? `<a href="${process.env.DRIVE_LINK}" target="_blank"
            ><button style="background-color: #ff9800">
              Download from Google Drive
            </button></a>`
        : ""}
      </p>
      <div class="thank-you-content">
        <p>
          Once again, thank you for your valuable contribution to Academic Queries.
          Your support enhances the learning experience for students across the
          community.
        </p>
      </div>
    </div>
    <div class="footer">
      <p>&copy; 2024 Academic Queries. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Failed to send email:", error);
        } else {
          console.log("Email sent: %s", info.messageId);
        }
      });
      const mailOptionsAdmin = {
        from: `"Academic Queries" <${process.env.EMAIL}>`, // Replace with your own name and email address
        to: process.env.EMAIL,
        subject: "Question Paper Uploaded By user",
        text: `${name},\n\nUploaded a Question Paper.\n\nRequired action,\nAcademic Queries`,
      };

      transporter.sendMail(mailOptionsAdmin, (error, info) => {
        if (error) {
          console.error("Failed to send email:", error);
        } else {
          console.log("Email sent: %s", info.messageId);
        }
      });

      res
        .status(200)
        .json({ message: "Question paper uploaded successfully." });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
      console.log(error);
    });
});
//to display valid paper by course
router.get("/api/course/:type", (req, res) => {
  const type = req.params.type;

  // Get items by course = type and valid = true
  QuestionPaper.find({ course: type, valid: true })
    .sort({ year: -1 })
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    });
});
// Get question paper by ID
router.get("/api/get/paper/:id", async (req, res) => {
  try {
    const questionPaper = await QuestionPaper.findById(req.params.id);
    if (!questionPaper) {
      return res.status(404).json({ error: "Question paper not found" });
    }
    res.json(questionPaper);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch question paper" });
  }
});
// Get all unique years
router.get("/api/paper/years", async (req, res) => {
  try {
    const years = await QuestionPaper.distinct("year", {
      valid: true,
    }).maxTimeMS(30000);
    res.status(200).json(years);
  } catch (error) {
    console.error("Failed to fetch unique years:", error);
    res.status(500).json({ error: "Failed to fetch unique years" });
  }
});
// Route to fetch the count of valid question papers
router.get("/api/count/valid-question-papers", async (req, res) => {
  try {
    const count = await QuestionPaper.countDocuments({ valid: true });
    res.json(count);
  } catch (error) {
    console.error("Failed to fetch count of valid question papers:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch count of valid question papers" });
  }
});
module.exports = router;

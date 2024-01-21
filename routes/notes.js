const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const SubjectNotes = mongoose.model("ACADEMICQUERIESSUBJECTNOTES");

// Handle file upload endpoint by user
router.post("/api/upload/notes", async (req, res) => {
  try {
    const { f_path, u_name, u_email, s_name, s_topic } = req.body;

    console.log(req.body)

    const subjectNotes = new SubjectNotes({
      f_path,
      u_name,
      u_email,
      s_name,
      s_topic,
      valid: false,
    });

    await subjectNotes.save();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Academic Queries" <${process.env.EMAIL}>`,
      to: u_email,
      subject: "Notes Successfully Uploaded",
      html: `
      <!DOCTYPE html>
      <html lang="en">
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
            <h2>Notes Uploaded</h2>
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
              Thank you, ${u_name}, for contributing subject notes. Your effort is valuable in
              enhancing the learning experience for our community.
            </p>
            <p>
              The uploaded notes have been received and will be made available to
              fellow learners shortly. We appreciate your dedication to knowledge
              sharing.
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
                Once again, thank you for your contribution to Academic Queries.
                Together, we make learning more accessible and enjoyable.
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

    await transporter.sendMail(mailOptions);

    const mailOptionsAdmin = {
      from: `"Academic Queries" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: "Notes Uploaded By User",
      text: `${u_name},\n\nUploaded a Question Paper.\n\nRequired action,\nAcademic Queries`,
    };

    await transporter.sendMail(mailOptionsAdmin);

    res.status(200).json({ message: "Question paper uploaded successfully." });
  } catch (error) {
    console.error("Failed to process file upload:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get subject notes by s_name where valid is true
router.get("/api/subject-notes/:s_name", async (req, res) => {
  try {
    const s_name = req.params.s_name;

    // Retrieve subject notes with the specified s_name and valid is true
    const subjectNotes = await SubjectNotes.find({ s_name, valid: true });

    // Respond with the subject notes
    res.status(200).json(subjectNotes);
  } catch (error) {
    console.error("Failed to retrieve subject notes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Route to get a subject note by ID
router.get("/api/subject-notes/id/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const subjectNote = await SubjectNotes.findById(noteId);
    if (!subjectNote) {
      return res.status(404).json({ error: "Subject note not found" });
    }
    res.status(200).json(subjectNote);
  } catch (error) {
    console.error("Failed to retrieve subject note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

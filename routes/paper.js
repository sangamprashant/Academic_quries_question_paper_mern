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
        text: `Dear ${name},\n\nThank you for uploading the question paper. It has been received and will be reviewed shortly.\n\nBest regards,\nAcademic Queries`,
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

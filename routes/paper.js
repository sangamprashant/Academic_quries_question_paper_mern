const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const router = express.Router();
const QuestionPaper = mongoose.model("ACADEMICQUERIESQUESTIONPAPER");

// Set up file upload storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create a multer instance for file upload
const upload = multer({ storage });

// Handle file upload endpoint
router.post("/api/upload", upload.single("pdf"), (req, res) => {
  const { filename, path } = req.file;
  const { type, subject, year, course, valid, name } = req.body;
  // Create a new QuestionPaper document
  const questionPaper = new QuestionPaper({
    type: type,
    subject: subject,
    year: year,
    course: course,
    pdfPath: path,
    valid: valid || false, // Set valid to false if not provided
    name: valid ? name : null, // Set name to null if valid is false
  });

  // Save the document to MongoDB
  questionPaper
    .save()
    .then(() => {
      res.status(200).json({ message: "Question paper uploaded successfully." });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

//get all papers
router.get("/api/question-papers", (req, res) => {
  QuestionPaper.find()
    .then((questionPapers) => {
      res.json(questionPapers);
    })
    .catch((error) => {
      console.error("Failed to fetch question papers:", error);
      res.status(500).json({ error: "Failed to fetch question papers" });
    });
});

//to display valid paper
router.get("/api/course/:type", (req, res) => {
  const type = req.params.type;

  // Get items by course = type and valid = true
  QuestionPaper.find({ course: type, valid: true })
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    });
});

module.exports = router;

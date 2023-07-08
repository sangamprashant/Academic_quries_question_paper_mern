const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const router = express.Router();
const QuestionPaper =mongoose.model("ACADEMICQUERIESQUESTIONPAPER");

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

  // Create a new QuestionPaper document
  const questionPaper = new QuestionPaper({
    type: req.body.type,
    subject: req.body.subject,
    year: req.body.year,
    course:req.body.course,
    pdfPath: path,
  });

  // Save the document to MongoDB
  questionPaper
    .save()
    .then(() => {
      res.status(200).send("Question paper uploaded successfully");
    })
    .catch((error) => {
      console.error("Failed to save question paper:", error);
      res.status(500).send("Failed to upload question paper");
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


router.get("/api/course/:type", (req, res) => {
  const type = req.params.type;

  // Get items by course = type
  QuestionPaper.find({ course: type })
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    });
});



module.exports = router;

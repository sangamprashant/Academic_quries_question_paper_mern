const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const router = express.Router();
const COURSE = mongoose.model("ACADEMICQUERIESCOURSEQUESTIONPAPER");

// Set up file upload storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "courseimg/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create a multer instance for file upload
const upload = multer({ storage });

// Handle file upload endpoint
router.post("/api/add/course", upload.single("pdf"), (req, res) => {
  const { filename, path } = req.file;
  const { inputName, inputPath } = req.body;
  // Create a new QuestionPaper document
  const Course = new COURSE({
    courseImage: path,
    coursePath: inputPath,
    courseName: inputName,
  });

  // Save the document to MongoDB
  Course.save()
    .then(() => {
      res.status(200).json({ message: "Course uploaded successfully." });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

// Get all course question papers
router.get("/api/get/course", (req, res) => {
    COURSE.find()
    .then((types) => {
      res.status(200).json(types);
    })
    .catch((error) => {
      console.error("Failed to fetch types:", error);
      res.status(500).json({ error: "Failed to fetch types" });
    });
});
module.exports = router;

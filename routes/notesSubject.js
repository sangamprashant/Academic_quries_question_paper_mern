const express = require("express");
const mongoose = require("mongoose"); // Add this import statement
const router = express.Router();
const SubjectName = mongoose.model("ACADEMICQUERIESNAMESUBJECTNOTES");

// Route to create a new course question paper
router.post("/api/course-question-papers", async (req, res) => {
  try {
    const { subjectPath, subjectName, subjectImage } = req.body;

    // Validate the required fields
    if (!subjectPath || !subjectName || !subjectImage) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new course question paper document
    const newCourseQuestionPaper = new SubjectName({
      subjectPath,
      subjectName,
      subjectImage,
    });

    // Save the document to the database
    await newCourseQuestionPaper.save();

    // Respond with a success message
    res.status(201).json({ message: "Course question paper created successfully" });
  } catch (error) {
    console.error("Failed to create course question paper:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get all subjects sorted by names
router.get("/api/subjects", async (req, res) => {
    try {
      // Retrieve all subjects from the database, sorted by subjectName
      const allSubjects = await SubjectName.find().sort({ subjectName: 1 });
  
      // Respond with the list of subjects
      res.status(200).json(allSubjects);
    } catch (error) {
      console.error("Failed to retrieve subjects:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;

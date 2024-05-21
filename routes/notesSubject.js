const express = require("express");
const mongoose = require("mongoose"); // Add this import statement
const router = express.Router();
const SubjectName = mongoose.model("ACADEMICQUERIESNAMESUBJECTNOTES");

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

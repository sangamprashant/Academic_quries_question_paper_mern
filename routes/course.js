const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const COURSE = mongoose.model("ACADEMICQUERIESCOURSEQUESTIONPAPER");

// Get all course question papers
router.get("/api/get/course", (req, res) => {
  COURSE.find()
    .sort({ courseName: 1 })
    .then((courses) => {
      res.status(200).json(courses);
    })
    .catch((error) => {
      console.error("Failed to fetch courses:", error);
      res.status(500).json({ error: "Failed to fetch courses" });
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TypeQuestionPaper = mongoose.model("ACADEMICQUERIESTYPEQUESTIONPAPER");

// Get all types
router.get("/api/get/types", (req, res) => {
  TypeQuestionPaper.find()
    .sort({ valueName: 1 })
    .then((types) => {
      res.status(200).json(types);
    })
    .catch((error) => {
      console.error("Failed to fetch types:", error);
      res.status(500).json({ error: "Failed to fetch types" });
    });
});

module.exports = router;

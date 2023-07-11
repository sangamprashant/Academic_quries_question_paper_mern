const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TypeQuestionPaper = mongoose.model("ACADEMICQUERIESTYPEQUESTIONPAPER");

// Add a new type
router.post("/api/add/types", async (req, res) => {
  const { valuePath, valueName } = req.body;

  try {
    // Check if a type with the same valueName or valuePath already exists
    const existingType = await TypeQuestionPaper.findOne({
      $or: [{ valueName }, { valuePath }],
    });

    if (existingType) {
      return res.status(400).json({ error: "Type already exists." });
    }

    // Create a new TypeQuestionPaper document
    const typeQuestionPaper = new TypeQuestionPaper({
      valuePath,
      valueName,
    });

    // Save the document to MongoDB
    await typeQuestionPaper.save();

    res.status(200).json({ message: "Type created successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to create type", details: error });
  }
});

// Get all types
router.get("/api/get/types", (req, res) => {
  TypeQuestionPaper.find()
    .then((types) => {
      res.status(200).json(types);
    })
    .catch((error) => {
      console.error("Failed to fetch types:", error);
      res.status(500).json({ error: "Failed to fetch types" });
    });
});

module.exports = router;

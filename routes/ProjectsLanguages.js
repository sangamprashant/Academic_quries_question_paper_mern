const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const QuestionPaper = mongoose.model("ACADEMICQUERIESQUESTIONPAPER");
const Projects = mongoose.model("ACADEMICQUERIESPROJECTS");
const ProjectLanguage = mongoose.model("ACADEMICQUERIESPROJECTLANGUAGE");

// Get a list of all project languages
router.get("/api/project/languages", async (req, res) => {
  try {
    const projectLanguages = await ProjectLanguage.find();
    res.json(projectLanguages);
  } catch (error) {
    res.status(500).json({ error: "Error getting project languages" });
  }
});

// Get a project languages
router.get("/api/project/:languages", async (req, res) => {
  try {
    const {languages} = req.params;
    const projectLanguages = await ProjectLanguage.findOne({ProjectName:languages});
    res.status(200).json(projectLanguages);
  } catch (error) {
    res.status(500).json({ error: "Error getting project languages" });
  }
});

module.exports = router;

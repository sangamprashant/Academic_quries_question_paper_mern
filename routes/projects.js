const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const QuestionPaper = mongoose.model("ACADEMICQUERIESQUESTIONPAPER");
const Projects = mongoose.model("ACADEMICQUERIESPROJECTS");
const ProjectLanguage = mongoose.model("ACADEMICQUERIESPROJECTLANGUAGE");
const requireLogin = require("../middleware/requiredLogin");

// Route to handle the POST request to save data
router.post("/api/admin/upload", async (req, res) => {
    try {
      const { type, topic, report, ppt, file, images, name, email, valid } = req.body;
  
      // Create a new project document using the Projects model
      const project = new Projects({
        type,
        topic,
        report: report || null,
        ppt: ppt || null,
        file: file || null,
        images,
        name: name || null,
        email: email || null,
        valid,
      });
  
      // Save the project document to the database
      await project.save();
  
      return res.json({ message: "Project data saved successfully" });
    } catch (error) {
      console.error("Failed to save project data:", error);
      return res.status(500).json({ error: "Failed to save project data" });
    }
  });

module.exports = router;

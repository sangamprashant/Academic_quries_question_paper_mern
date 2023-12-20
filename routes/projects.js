const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const QuestionPaper = mongoose.model("ACADEMICQUERIESQUESTIONPAPER");
const Projects = mongoose.model("ACADEMICQUERIESPROJECTS");
const ProjectLanguage = mongoose.model("ACADEMICQUERIESPROJECTLANGUAGE");

//get valid project
router.get("/api/get/project", async (req, res) => {
  try {
    const projects = await Projects.find({valid:true}).sort({ topic: 1 })

    return res.json(projects);
  } catch (error) {
    console.error("Failed to save project data:", error);
    return res.status(500).json({ error: "Failed to save project data" });
  }
});
// Get valid projects by type
router.get("/api/get/project/by/type/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const projects = await Projects.find({ type: type, valid: true }).sort({ topic: 1 });
    return res.json(projects);
  } catch (error) {
    console.error("Failed to get valid projects by type:", error);
    return res.status(500).json({ error: "Failed to get valid projects" });
  }
});
// Get valid projects by id
router.get("/api/get/project/by/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const projects = await Projects.findOne({ _id: id, valid: true });
    return res.status(200).json(projects);
  } catch (error) {
    console.error("Failed to get valid projects by type:", error);
    return res.status(500).json({ error: "Failed to get valid projects" });
  }
});
// Get the 10 most recent valid projects
router.get("/api/get/recent/projects", async (req, res) => {
  try {
    const recentProjects = await Projects.find({ valid: true })
      .sort({ createdAt: -1 }) // Sort by creation date in descending order (most recent first)
      .limit(10); // Limit to the latest 10 projects
    return res.json(recentProjects);
  } catch (error) {
    console.error("Failed to get recent projects:", error);
    return res.status(500).json({ error: "Failed to get recent projects" });
  }
});
module.exports = router;

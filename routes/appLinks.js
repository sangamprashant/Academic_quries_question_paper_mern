const express = require("express");
const AppLink = require("../models/appLinks");
const router = express.Router();

// Get all app links
router.get("/api/app-links/get", async (req, res) => {
  try {
    const appLinks = await AppLink.find();
    res.status(200).json(appLinks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch app links" });
  }
});

module.exports = router;

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


  
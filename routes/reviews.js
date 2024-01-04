const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Reviews = mongoose.model("ACADEMICQUERIESREVIEWS");
const nodemailer = require("nodemailer");

router.post("/api/public/review", async (request, response) => {
  try {
    const { name, email, feedback, stars, image } = await request.body;

    const review = new Reviews({
      name,
      email,
      feedback,
      stars,
      image,
    });

    try {
      await review.save();

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: `"Academic Queries" <${process.env.EMAIL_DEMO}>`,
        to: email,
        subject: "Thank You for Your Review",
        text: `Dear ${name},\n\nThank you for providing your valuable feedback. We appreciate your time and effort in sharing your thoughts with us.\n\nBest regards,\nAcademic Queries`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Thank-you Email sent: %s", info.messageId);

      return response
        .status(200)
        .json({ message: "Review submitted successfully." });
    } catch (error) {
      console.error("Failed to save review:", error);
      return response.status(500).json({ error: "Failed to save review." });
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Server Error" });
  }
});

router.get("/api/public/review", async (request, response) => {
  try {
    const reviews = await Reviews.find({}).sort({ createdAt: -1 });
    return response.status(200).json(reviews);
  } catch (error) {
    console.error("Error:", error);
    return response.status(500).json({ error: "Failed to fetch reviews" });
  }
});

router.get("/api/public/review/average", async (req, res) => {
  try {
    const totalUsers = await Reviews.countDocuments();
    const starsCount = await Reviews.aggregate([
      {
        $group: {
          _id: "$stars",
          count: { $sum: 1 },
        },
      },
    ]);
    const starsPercentage = starsCount.map((star) => ({
      star: star._id,
      percentage: (star.count / totalUsers) * 100,
    }));
    const weightedSum = starsCount.reduce(
      (acc, star) => acc + star._id * star.count,
      0
    );

    const averageStars = weightedSum / totalUsers;

    res.status(200).json({
      starsPercentage:starsPercentage,
      averageStars:averageStars,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

module.exports = router;

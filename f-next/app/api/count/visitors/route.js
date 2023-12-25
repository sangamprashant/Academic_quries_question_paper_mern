import { CourseQuestionPaperCount } from "@/utils/models/visitors";
import mongoose from "mongoose";
import cors from 'cors';

const corsMiddleware = cors();

export const GET = async (req, res) => {
  try {
    // Enable CORS
    corsMiddleware(req, res);

    // Connect to MongoDB using mongoose.connect
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const courseQuestionPaperCount = await CourseQuestionPaperCount.find({});

    // Close the connection
    await mongoose.connection.close();

    // Send a proper JSON response
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(courseQuestionPaperCount);
  } catch (error) {
    console.error("Error:", error);

    // Send an error response
    res.status(500).json({ error: "Failed to fetch the Category" });
  }
};

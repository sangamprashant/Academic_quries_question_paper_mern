import { CourseQuestionPaperCount } from "@/utils/models/visitors";
import mongoose from "mongoose";
import cors from 'cors';

const corsMiddleware = cors();

let cachedDb = null;

export const GET = async (req, res) => {
  try {
    await corsMiddleware(req, res);

    if (!cachedDb) {
      // Connect to MongoDB using mongoose.connect
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      cachedDb = mongoose.connection;
    }

    const courseQuestionPaperCount = await CourseQuestionPaperCount.find({});
    // Do not close the connection

    return new Response(JSON.stringify(courseQuestionPaperCount), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Failed to fetch the Category", {
      error: "Failed to fetch the Category",
      status: 500,
    });
  }
};

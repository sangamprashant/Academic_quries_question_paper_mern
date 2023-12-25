import { CourseQuestionPaper } from "@/utils/models/course";
import mongoose from "mongoose";

export const GET = async (req, res) => {
    console.log(req)
    try {
      // Connect to MongoDB using mongoose.connect
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const courseQuestionPaper = await CourseQuestionPaper.find({});
      console.log("courseQuestionPaper",courseQuestionPaper)
      return new Response(JSON.stringify(courseQuestionPaper), { status: 200 });
    } catch (error) {
      console.error("Error:", error);
      return new Response("Failed to fetch the Category", { error:"Failed to fetch the Category",status: 500 })
    }
  };
  
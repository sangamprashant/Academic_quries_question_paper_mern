import { CourseQuestionPaperCount } from "@/utils/models/visitors";
import { connectToDB } from "@/utils/dataBase";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const courseQuestionPaperCount = await CourseQuestionPaperCount.findOne({});

    return new Response(
      JSON.stringify(courseQuestionPaperCount.counts.length),
      { status: 200 }
    );
  } catch (error) {
    return new Response("error in count", { status: 500 });
  }
};
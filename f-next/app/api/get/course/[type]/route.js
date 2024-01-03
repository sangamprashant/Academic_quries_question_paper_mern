import { connectToDB } from "@/utils/dataBase";
import { QuestionPaper } from "@/utils/models/paper";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const courseQuestionPaper = await QuestionPaper.find({
      course: params.type,
      valid: true,
    }).sort({ year: -1 });
    return new Response(JSON.stringify(courseQuestionPaper), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "failed to fetch the course" }),
      { status: 500 }
    );
  }
};

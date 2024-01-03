import { connectToDB } from "@/utils/dataBase";
import { QuestionPaper } from "@/utils/models/paper";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const questionPaperOpen = await QuestionPaper.findById(params.id);
    return new Response(JSON.stringify(questionPaperOpen), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "failed to fetch the course" }),
      { status: 500 }
    );
  }
};
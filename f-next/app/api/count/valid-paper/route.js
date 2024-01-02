import { connectToDB } from "@/utils/dataBase";
import { QuestionPaper } from "@/utils/models/paper";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const count = await QuestionPaper.countDocuments({ valid: true });

    return new Response(
      JSON.stringify(count),
      { status: 200 }
    );
  } catch (error) {
    return new Response("error in count", { status: 500 });
  }
};

import { connectToDB } from "@/utils/dataBase";
import { Projects } from "@/utils/models/projects";

export const GET = async (request, {params}) => {
  try {
    await connectToDB();
    const recentProjects = await Projects.find({ valid: true , type:params.language })
    .sort({ topic: 1 })
    return new Response(JSON.stringify(recentProjects), { status: 200 });
  } catch (error) {
    console.error("Failed to get recent projects:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get recent projects" }),
      { status: 500 }
    );
  }
};
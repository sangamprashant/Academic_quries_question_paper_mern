import { connectToDB } from "@/utils/dataBase";
import { Projects } from "@/utils/models/projects";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const recentProjects = await Projects.find({ valid: true })
      .sort({ createdAt: -1 }) // Sort by creation date in descending order (most recent first)
      .limit(10); // Limit to the latest 10 projects
    return new Response(JSON.stringify(recentProjects), { status: 200 });
  } catch (error) {
    console.error("Failed to get recent projects:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get recent projects" }),
      { status: 500 }
    );
  }
};
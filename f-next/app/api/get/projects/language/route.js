const { connectToDB } = require("@/utils/dataBase");
const { ProjectLanguage } = require("@/utils/models/projectLanguage");

// Get a list of all project languages
export const GET = async (req, res) => {
  try {
    await connectToDB();
    const projectLanguages = await ProjectLanguage.find();
    return new Response(JSON.stringify(projectLanguages), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error getting project languages" }),
      { status: 500 }
    );
  }
};

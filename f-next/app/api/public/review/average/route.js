import { connectToDB } from "@/utils/dataBase";
import { Reviews } from "@/utils/models/reviews";

export const GET = async (request) => {
  try {
    await connectToDB();
    const totalUsers = await Reviews.countDocuments();
    const starsCount = await Reviews.aggregate([
      {
        $group: {
          _id: "$stars",
          count: { $sum: 1 },
        },
      },
    ]);
    const starsPercentage = starsCount.map((star) => ({
      star: star._id,
      percentage: (star.count / totalUsers) * 100,
    }));
    // Calculate the weighted sum of stars
    const weightedSum = starsCount.reduce(
      (acc, star) => acc + star._id * star.count,
      0
    );

    const averageStars = weightedSum / totalUsers;
    
    return new Response(
      JSON.stringify({
        starsPercentage: starsPercentage,
        averageStars: averageStars,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
    });
  }
};

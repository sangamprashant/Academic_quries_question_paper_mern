import { connectToDB } from "@/utils/dataBase";
import { Reviews } from "@/utils/models/reviews";
const nodemailer = require("nodemailer");

export const POST = async (request) => {
  try {
    await connectToDB();

    const { name, email, feedback, stars, image } = await request.json();

    const review = new Reviews({
      name,
      email,
      feedback,
      stars,
      image,
    });

    try {
      await review.save();

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL, 
          pass: process.env.EMAIL_PASSWORD, 
        },
      });

      const mailOptions = {
        from: `"Academic Queries" <${process.env.EMAIL_DEMO}>`,
        to: email,
        subject: "Thank You for Your Review",
        text: `Dear ${name},\n\nThank you for providing your valuable feedback. We appreciate your time and effort in sharing your thoughts with us.\n\nBest regards,\nAcademic Queries`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Thank-you Email sent: %s", info.messageId);

      return new Response(
        JSON.stringify({ message: "Review submitted successfully." }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Failed to save review:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save review." }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
    });
  }
};

export const GET = async (request) => {
    try {
      await connectToDB();
      const reviews = await Reviews.find({}).sort({ createdAt: -1 });
      return new Response(JSON.stringify(reviews), { status: 200 });
    } catch (error) {
      console.error("Error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch reviews" }),
        { status: 500 }
      );
    }
  };
  
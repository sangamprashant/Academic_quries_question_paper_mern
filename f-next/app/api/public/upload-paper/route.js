import { connectToDB } from "@/utils/dataBase";
import { QuestionPaper } from "@/utils/models/paper";
const nodemailer = require("nodemailer");

export const POST = async (request) => {
  try {
    await connectToDB();
    const { path, type, subject, year, course, name, email } = await request.json();

    const questionPaper = new QuestionPaper({
      type: type,
      subject: subject,
      year: year,
      course: course,
      pdfPath: path,
      valid: false,
      name: name,
      email: email,
    });

    try {
      await questionPaper.save();

      // Send email to the user
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL, // Replace with your own email address
          pass: process.env.EMAIL_PASSWORD, // Replace with your own email password
        },
      });

      //to user
      const mailOptions = {
        from: `"Academic Queries" <${process.env.EMAIL_DEMO}>`, // Replace with your own name and email address
        to: email,
        subject: "Question Paper Uploaded Successfully",
        text: `Dear ${name},\n\nThank you for uploading the question paper. It has been received and will be reviewed shortly.\n\nBest regards,\nAcademic Queries`,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent: %s", info.messageId);

      return new Response(JSON.stringify({ message: "Question paper uploaded successfully." }), { status: 200 });
    } catch (error) {
      console.error("Failed to save question paper:", error);
      return new Response(JSON.stringify({ error: "Failed to save question paper." }), { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
};

import { connectToDB } from "@/utils/dataBase";
import { Contact } from "@/utils/models/email";
const nodemailer = require("nodemailer");

export const POST = async (request) => {
  try {
    await connectToDB();

  const { name, to, subject, input } = await request.json();
  const message = `Dear ${name},
    
    Thank you for contacting us. We have received your message and will respond to you soon.
  
    Your mssage: ${input}
    
    Best regards,
    AcademicQuries`;

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: `"AcademicQuries" <${process.env.EMAIL}>`,
    to: to,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
      });
    }
    console.log("Email sent: %s", info.messageId);

    const contact = new Contact({
      name: name,
      email: to,
      message: input,
      subject: subject,
      responded: false,
    });
    contact
      .save()
      .then(() => {
        return new Response(
          JSON.stringify({ message: "Message send successfully." }),
          { status: 200 }
        );
      })
      .catct((error) => {
        return new Response(JSON.stringify({ error: "Message not send." }), {
          status: 500,
        });
      });
  });
  } catch (error) {
    return new Response(JSON.stringify({ error:"Server Error" }), {
      status: 500,
    });
  }
  
};

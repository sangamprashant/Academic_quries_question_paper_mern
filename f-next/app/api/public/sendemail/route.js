import { connectToDB } from "@/utils/dataBase";
import { Contact } from "@/utils/models/email";
const nodemailer = require("nodemailer");

export const POST = async (request) => {
  try {
    await connectToDB();

    const { name, to, subject, input } = await request.json();
    const message = `Dear ${name},
    
    Thank you for contacting us. We have received your message and will respond to you soon.
  
    Your message: ${input}
    
    Best regards,
    AcademicQueries`;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: `"AcademicQueries" <${process.env.EMAIL}>`,
      to: to,
      subject: subject,
      text: message,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          console.error(error);
          reject(new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 }));
        } else {
          console.log("Email sent: %s", info.messageId);

          const contact = new Contact({
            name: name,
            email: to,
            message: input,
            subject: subject,
            responded: false,
          });

          try {
            await contact.save();
            resolve(new Response(JSON.stringify({ message: "Message sent successfully." }), { status: 200 }));
          } catch (error) {
            console.error(error);
            reject(new Response(JSON.stringify({ error: "Failed to save contact." }), { status: 500 }));
          }
        }
      });
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
};

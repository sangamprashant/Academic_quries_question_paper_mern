const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = mongoose.model("ACADEMICQUERIESEMAIL");

router.post("/api/public/sendemail", async (req, res) => {
  try {
    const { to, name, input, subject } = req.body;

    const message = `Dear ${name},
    
    Thank you for contacting us. We have received your message and will respond to you soon.
  
    Your message: ${input}
    
    Best regards,
    AcademicQueries`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"AcademicQueries" <${process.env.EMAIL}>`,
      to: to,
      subject: subject,
      text: message,
    };

    // Use Promise.all to parallelize saving contact and sending email
    const [contactSaveResult, emailSendResult] = await Promise.all([
      Contact.create({
        name: name,
        email: to,
        message: input,
        subject: subject,
        responded: false,
      }),
      transporter.sendMail(mailOptions),
    ]);

    console.log("Email sent: %s", emailSendResult.messageId);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;

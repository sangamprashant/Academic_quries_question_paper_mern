const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = mongoose.model("ACADEMICQUERIESEMAIL");

router.post("/api/public/sendemail", (req, res) => {
  const { to, name, input, subject } = req.body;

  const message = `Dear ${name},
    
    Thank you for contacting us. We have received your message and will respond to you soon.
  
    Your mssage: ${input}
    
    Best regards,
    AcademicQuries`;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL, // Replace with your own email address
      pass: process.env.EMAIL_PASSWORD, // Replace with your own email password
    },
  });

  // Set up email data
  let mailOptions = {
    from: `"AcademicQuries" <${process.env.EMAIL}>`, // Replace with your own name and email address
    to: to,
    subject: subject,
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to send email" });
    }
    console.log("Email sent: %s", info.messageId);

    // Save the contact details to the database
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
        res.json({ message: "Email sent successfully" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Failed to save contact details" });
      });
  });
});

module.exports = router;

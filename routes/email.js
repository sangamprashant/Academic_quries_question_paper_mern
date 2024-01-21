const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = mongoose.model("ACADEMICQUERIESEMAIL");

router.post("/api/public/sendemail", async (req, res) => {
  try {
    const { to, name, input, subject } = req.body;
    
    const message = `
    <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: "Arial", sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .header {
        background-color: #007bff;
        color: #fff;
        text-align: center;
        padding: 10px;
        border-radius: 8px 8px 0 0;
      }

      .body {
        padding: 20px;
      }

      .app-title {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
        align-items: center;
      }

      .app-title img {
        border-radius: 50%;
        border: 1px solid rgb(183, 183, 183);
      }

      .footer {
        text-align: center;
        padding: 10px;
        border-top: 1px solid #ccc;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      button {
        display: inline-block;
        margin: 5px;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Message Response sent!</h2>
      </div>

      <div class="app-title">
        <img
          src="https://raw.githubusercontent.com/sangamprashant/Academic_quries_question_paper_Next_JS/main/public/logo.png"
          alt="logo"
          style="width: 50px; height: 50px; object-fit: cover"
        />
        <h1>Academic Queries</h1>
      </div>
      <hr />
      <img
        src="https://raw.githubusercontent.com/sangamprashant/Academic_quries_question_paper_Next_JS/main/public/logo%20aq.png"
        alt="Company Logo"
      />

      <div class="body">
        <p>Dear ${name},</p>
        <p>Thank you for contacting us. We have received your message and will respond to you soon.</p>
        <p ><b>Your message:</b><br/> ${input}</p>
        <p>Best regards,<br />AcademicQueries</p>
        <hr/>
        <p>You can download our app from the following stores:</p>
        <p>
          <a href="https://www.amazon.com/your-app" target="_blank">
            <button style="background-color: #28a745">
              Download from Amazon Appstore
            </button>
          </a>
          <a href="https://drive.google.com/your-app" target="_blank">
            <button style="background-color: #ff9800">
              Download from Google Drive
            </button>
          </a>
        </p>
       
      </div>
      
      <div class="footer">
        <p>&copy; 2024 Academic Queries. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
    `;

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
      html: message,
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

// Define a route to handle retrieving the email
// Define a route to handle retrieving the email and sending the HTML email
router.post("/api/send-app-link", async (req, res) => {
  try {
    // Extract the email from the request body
    const { email } = req.body;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"AcademicQueries" <${process.env.EMAIL}>`,
      to: email,
      subject: "Academic Queries App Link",
      html: `
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              font-family: "Arial", sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
          
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
          
            .header {
              background-color: #007bff;
              color: #fff;
              text-align: center;
              padding: 10px;
              border-radius: 8px 8px 0 0;
            }
          
            .body {
              padding: 20px;
            }
          
            .app-title {
              display: flex;
              gap: 10px;
              margin-bottom: 15px;
              align-items: center;
            }
          
            .app-title img {
              border-radius: 50%;
              border: 1px solid rgb(183, 183, 183);
            }
          
            .footer {
              text-align: center;
              padding: 10px;
              border-top: 1px solid #ccc;
            }
          
            img {
              max-width: 100%;
              height: auto;
            }
          
            button {
              display: inline-block;
              margin: 5px;
              padding: 10px 20px;
              background-color: #007bff;
              color: #fff;
              text-decoration: none;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>App Link Email</h2>
            </div>
          
            <div class="app-title">
              <img
                src="https://raw.githubusercontent.com/sangamprashant/Academic_quries_question_paper_Next_JS/main/public/logo.png"
                alt="logo"
                style="width: 50px; height: 50px; object-fit: cover"
              />
              <h1>Academic Queries</h1>
            </div>
            <hr />
            <img
              src="https://raw.githubusercontent.com/sangamprashant/Academic_quries_question_paper_Next_JS/main/public/logo%20aq.png"
              alt="Company Logo"
            />
          
            <div class="body">
              <p>Dear User,</p>
              <p>You can download our app from the following stores:</p>
              <p>
              ${process.env.AMAZON_LINK
                ? `<a href="${process.env.AMAZON_LINK}" target="_blank"
                    ><button style="background-color: #28a745">
                      Download from Amazon Appstore
                    </button></a>`
                : ""}
              ${process.env.DRIVE_LINK
                ? `<a href="${process.env.DRIVE_LINK}" target="_blank"
                    ><button style="background-color: #ff9800">
                      Download from Google Drive
                    </button></a>`
                : ""}
              </p>
              <p>
                Thank you for choosing AcademicQueries. We appreciate your interest
                and look forward to providing you with a great app experience.
              </p>
              <p>Best regards,<br />AcademicQueries</p>
            </div>
          
            <div class="footer">
              <p>&copy; 2024 Academic Queries. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error retrieving email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

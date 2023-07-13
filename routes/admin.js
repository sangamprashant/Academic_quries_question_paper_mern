const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserQuestionPaper = require("../models/Admin");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Signup route
router.post("/api/admin/backend/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please enter all fields.." });
  }

  // Check if user with the same email already exists
  UserQuestionPaper.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      // Encrypt the password
      bcrypt.hash(password, 12, (error, hashedPassword) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Server Error" });
        }

        // Create a new user with hashed password
        const newUser = new UserQuestionPaper({
          email,
          password: hashedPassword,
        });

        // Save the user to the database
        newUser
          .save()
          .then((savedUser) => {
            res.json(savedUser);
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ message: "Server Error" });
          });
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    });
});
// Sign-in route
router.post("/api/signin", (req, res) => {
  const { email, password } = req.body;

  // Check if the user with the provided email exists
  UserQuestionPaper.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ error: "Invalid email or password" });
      }

      // Compare the provided password with the hashed password stored in the database
      bcrypt.compare(password, user.password, (error, isMatch) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ error: "Server Error" });
        }

        if (!isMatch) {
          return res.status(400).json({ error: "Invalid email or password" });
        }

        // Password is correct, user is authenticated

        // Generate JWT token
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          process.env.JWT_SECRET
        );
        // Include any other user details you want to send
        const userDetails = {
          email: user.email,
          _id: user._id,
          // Include any other user details you want to send
        };

        res.json({ message: "Sign-in successful", user: userDetails, token });
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Server Error" });
    });
});
// Endpoint to check email
router.post("/api/check/email", (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

  // Create a transporter for sending emails
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL, // Replace with your own email address
      pass: process.env.EMAIL_PASSWORD, // Replace with your own email password
    },
  });

  UserQuestionPaper.findOne({ email: email })
    .then((user) => {
      if (user) {
        // User found, send the OTP via email
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Password Reset OTP",
          text: `Dear user,\n\nYou have requested to reset your password for the site "${process.env.DOMAIN}".\n\nPlease use the following OTP to proceed with the password reset:\n\nOTP: ${otp}\n\nIf you did not initiate this request, please ignore this email.\n\nBest regards,\nThe Academic Queries Team`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ error: "Failed to send OTP" });
          } else {
            return res.json({ message: "Otp send to your email.", otp: otp });
          }
        });
      } else {
        // User not found
        return res.json({ error: "User not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    });
});
// Reset password route
router.put("/api/admin/backend/reset-password", (req, res) => {
  const { email, newPassword } = req.body;

  // Hash the new password
  bcrypt.hash(newPassword, 12, (error, hashedPassword) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Server Error" });
    }

    // Update the user's password
    UserQuestionPaper.findOneAndUpdate({ email }, { password: hashedPassword })
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(400).json({ error: "User not found" });
        }
        res.json({ message: "Password reset successful" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      });
  });
});
module.exports = router;

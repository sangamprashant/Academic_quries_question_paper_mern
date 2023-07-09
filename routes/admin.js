const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserQuestionPaper = require("../models/Admin");
const jwt = require("jsonwebtoken");

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

module.exports = router;

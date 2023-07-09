const mongoose = require("mongoose");

const UserquestionPaperSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserQuestionPaper = mongoose.model(
  "ACADEMICQUERIESUSERQUESTIONPAPER",
  UserquestionPaperSchema
);

module.exports = UserQuestionPaper;

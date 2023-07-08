const mongoose = require("mongoose");

const questionPaperSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["internal", "external"],
  },
  subject: { type: String, required: true },
  year: { type: Number, required: true },
  course:{type:String,required:true},
  pdfPath: { type: String, required: true },
});

const QuestionPaper = mongoose.model(
  "ACADEMICQUERIESQUESTIONPAPER",
  questionPaperSchema
);

module.exports = QuestionPaper;

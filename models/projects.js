const mongoose = require("mongoose");

const questionPaperSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    report: {
      type: Number,
      required: true,
    },
    ppt: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    valid: {
      type: Boolean,
    },
  },
  { timestamps: true } // Add the timestamps option
);

const Projects = mongoose.model(
  "ACADEMICQUERIESPROJECTS",
  questionPaperSchema
);

module.exports = Projects;

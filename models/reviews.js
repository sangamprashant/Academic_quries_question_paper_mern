const mongoose = require("mongoose");

const TypequestionPaperSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
    },
    stars: {
      type: Number,
      default: 0,
    },
    image: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model(
  "ACADEMICQUERIESREVIEWS",
  TypequestionPaperSchema
);

module.exports = Reviews;

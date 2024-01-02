const { Schema, model, models, default: mongoose } = require("mongoose");

const ModelSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    pdfPath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    valid: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const QuestionPaper =
  models.ACADEMICQUERIESQUESTIONPAPER ||
  model("ACADEMICQUERIESQUESTIONPAPER", ModelSchema);

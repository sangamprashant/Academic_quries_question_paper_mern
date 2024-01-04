const { Schema, model, models, default: mongoose } = require("mongoose");

const ModelSchema = new Schema(
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

export const Reviews =
  models.ACADEMICQUERIESREVIEWS || model("ACADEMICQUERIESREVIEWS", ModelSchema);

const { Schema, model, models, default: mongoose } = require("mongoose");

const ModelSchema = new Schema(
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
      type: String,
    },
    ppt: {
      type: String,
    },
    images: [{ type: String }],
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

export const Projects = models.ACADEMICQUERIESPROJECTS || model("ACADEMICQUERIESPROJECTS", ModelSchema);

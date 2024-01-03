

const { Schema, model, models, default: mongoose } = require("mongoose");

const ModelSchema = new Schema(
  {
    ProjectName: { type: String, required: true },
    ProjectImage: { type: String, required: true },
  },
  { timestamps: true }
);

export const ProjectLanguage =models.ACADEMICQUERIESPROJECTLANGUAGE || model("ACADEMICQUERIESPROJECTLANGUAGE", ModelSchema);

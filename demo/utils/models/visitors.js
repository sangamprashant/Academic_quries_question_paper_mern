const { Schema, model, models, default: mongoose } = require("mongoose");

const ModelSchema = new Schema({
  counts: {
    type: [String],
    default: ["adadw"], // Initialize with "adadw" on the first visit
  },
},
{ timestamps: true }) // Add the timestamps option)

 export const CourseQuestionPaperCount = models.ACADEMICQUERIESVISITOR||model("ACADEMICQUERIESVISITOR",ModelSchema);
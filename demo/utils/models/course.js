const { Schema, model, models, default: mongoose } = require("mongoose");

const ModelSchema = new Schema({
  coursePath: { type: String, required: true },
  courseName: { type: String, required: true },
  courseImage: { type: String, required: true },
},
{ timestamps: true })

 export const CourseQuestionPaper = models.ACADEMICQUERIESCOURSEQUESTIONPAPER||model("ACADEMICQUERIESCOURSEQUESTIONPAPER",ModelSchema);
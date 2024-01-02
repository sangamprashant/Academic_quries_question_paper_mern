const { Schema, model, models, default: mongoose } = require("mongoose");

const ModelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  deleted: {
    type: Boolean,
    defau: false,
  },
  responded: {
    type: Boolean,
    defau: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}); // Add the timestamps option)

export const Contact =
  models.ACADEMICQUERIESEMAIL || model("ACADEMICQUERIESEMAIL", ModelSchema);

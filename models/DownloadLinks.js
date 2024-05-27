const mongoose = require("mongoose");

const DownloadsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Downloads = mongoose.model("ACADEMICQUERIESDOWNLOADS", DownloadsSchema);

module.exports = Downloads;

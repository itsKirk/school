const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReportSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  marks: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
  created: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("report", ReportSchema);

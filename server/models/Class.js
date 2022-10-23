const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema(
  {
    name: {
      type: String,
    },
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: "department",
    },
    capacity: {
      type: Number,
      required: true,
      default: 25,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("class", classSchema);

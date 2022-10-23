const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema(
  {
    roomNo: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      default: Date().toString().substring(0, 15),
    },
    data: {
      type: Map,
      required: true,
      default: {},
    },
    details: {
      type: Map,
      required: true,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("attendance", attendanceSchema);

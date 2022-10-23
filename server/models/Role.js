const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const Roles = mongoose.model("role", RoleSchema);

Roles.find({ name: "admin" }).then((dbModel) => {
  if (dbModel == "") {
    Roles.create(
      { name: "admin" },
      { name: "teacher" },
      { name: "student" },
      { name: "staff" },
      { name: "parent" },
      function (err, doc) {}
    );
  }
});

module.exports = Roles;

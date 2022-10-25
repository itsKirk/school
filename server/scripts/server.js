const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("../data/db");

connectDb();

mongoose.connection.once("open", () => {
  console.log("::Database Connection Established::".bold.cyan.underline);
  const PORT = process.env.PORT;
  app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`.yellow)
  );
});
mongoose.connection.on("error", (err) => {
  console.log({ error: err.message });
});

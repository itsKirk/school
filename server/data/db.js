const mongoose = require("mongoose");
require("colors");
const connectDb = () => {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  try {
    mongoose.connect(process.env.MONGO_URL, options).then(() => {
      
    });
  } catch (err) {
    console.log({ error: err.message });
  }
};

module.exports = connectDb;

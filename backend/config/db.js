const mongoose = require("mongoose");
const config = require("config");

const connexionDb = async () => {
  try {
    await mongoose.connect(config.get("DB"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log(" DB is running ...");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connexionDb;

const mongoose = require("mongoose");

module.exports = (async function dbConfig() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
})();

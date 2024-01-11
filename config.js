const mongoose = require("mongoose");

const mongoUrl = `mongodb://127.0.0.1:27017/paypal`;

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Db connected Successfully"))
  .catch((error) => console.log("Error occured while connecting db", error));

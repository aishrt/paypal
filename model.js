const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Payments = mongoose.model("Payment", paymentSchema);

module.exports = Payments;

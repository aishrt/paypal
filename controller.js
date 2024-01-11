const Payments = require("./model");

const addPayments = async (req, res) => {
  try {
    const response = await Payments.create(req.body);
    return res.status(200).json({
      status: "200",
      message: "Payment added successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: error.message,
      error,
    });
  }
};

module.exports = {
  addPayments,
};

const express = require("express");
const Payments = require("./controller");
const router = express.Router();

router.post("/add", Payments.addPayments);

module.exports = router;

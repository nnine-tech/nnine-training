const mongoose = require("mongoose");

const addPaymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name."],
  },
  course: {
    type: String,
    required: [true, "Please specify the course."],
  },
  firstInstallement: {
    type: Number,
    required: [true, "1st installement amount is required."],
  },
  duesAmount: {
    type: Number,
    required: [true, "Please provide the due amount."],
  },
  secondInstallement: {
    type: Number,
    required: [true, "2nd installement amount is required."],
  },
  dateOfPayment: {
    type: Date,
    required: [true, "Date of payment is required."],
  },
  balance: {
    type: Number,
    required: [true, "Balance amount is required."],
  },
});

const Fees = mongoose.model("Fees", addPaymentSchema);

module.exports = Fees;

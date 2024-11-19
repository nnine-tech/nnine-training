const mongoose = require("mongoose");

const addPaymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required."],
  },
  course: {
    type: String,
    required: [true, "Course field is required."],
  },
  firstInstallement: {
    type: Number,
    required: [true, "1st Installement is required."],
  },
  duesAmount: {
    type: Number,
    required: [true, " Dues amount fiels is required."],
  },
  secondInstallement: {
    type: Number,
    required: [true, "2nd Installement field is required."],
  },
  dateOfPayment: {
    type: Date,
    required: [true, "Date of Payment field is required."],
  },
  balance: {
    type: Number,
    required: [true, "Balance field is required."],
  },
});

const Fees = mongoose.model("Fees", addPaymentSchema);

module.exports = Fees;

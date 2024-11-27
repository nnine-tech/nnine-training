const mongoose = require("mongoose");

const addPaymentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: [true, "Please provide the student id."],
  },
  courseId: {
    type: String,
    required: [true, "Please specify the course id."],
  },
  totalFee: {
    type: Number,
    required: [true, "Please provide the total fee amount."],
  },
  amountPaid: {
    type: Number,
    required: [true, "Please provide the paid amount."],
  },
  outstandingBalance: {
    type: Number,
    required: [true, "Please provide the outstanding balance."],
  },
  dueDate: {
    type: String,
    default: new Date().toDateString(),
  },
});

const Fees = mongoose.model("Fees", addPaymentSchema);

module.exports = Fees;

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  email: {
    unique: true,
    type: String,
    required: [true, "Email field is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone field is required"],
  },
  address: {
    type: String,
    required: [true, "Address field is required"],
  },
  enrollmentDate: {
    type: String,
    default: new Date().toDateString(),
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

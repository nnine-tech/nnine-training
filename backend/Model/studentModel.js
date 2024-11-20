const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "FullName field is required"],
  },
  lastName: {
    type: String,
    required: [true, "FullName field is required"],
  },
  email: {
    unique: true,
    type: String,
    required: [true, "Email field is required"],
  },
  department: {
    type: String,
    required: [true, "Department field is required"],
  },
  fees: {
    type: Number,
    required: [true, "Fees field is required"],
  },
  courseTaken: {
    type: String,
    required: [true, "CourseToken field is required"],
  },
  starting: {
    type: String,
    required: [true, "Starting field is required"],
  },
  ending: {
    type: String,
    required: [true, "Ending field is required"],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

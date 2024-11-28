const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  contact: {
    type: String,
    required: [true, "Contact number is required"],
  },
  level: {
    type: String,
    enum: ["Masters", "Bachelors", "+2/ Intermediate", "SEE"],

    required: [true, "Education level is required"],
  },
  preferredCourse: {
    type: String,
    required: [true, "Preferred course is required"],
  },
  shift: {
    type: String,
    enum: ["Morning", "Afternoon", "Evening"],
    required: [true, "Shift is required"],
  },
});

const Enroll = mongoose.model("Enroll", enrollSchema);

module.exports = Enroll;

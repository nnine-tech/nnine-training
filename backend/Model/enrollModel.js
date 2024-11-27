

const { default: mongoose } = require("mongoose");

const enrollSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },

  contact: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    enum: ["Masters", "Bachelors", "+2/ Intermediate", "SEE"],
    required: true,
  },
  preferredCourse: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    enum: ["Morning", "Afternoon", "Evening"],
    required: true,
  },
});

const Enroll = mongoose.model("enroll", enrollSchema);
module.exports = Enroll;

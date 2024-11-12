const mongoose = require("mongoose");

const coursesyllabusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A course syllabus must have a name"],
  },
  content: {
    type: [String],
    required: [true, "A course syllabus must have some contents"],
  },
  duration: {
    type: Number,
    requierd: [true, "A course syllabus must have a duration"],
  },
  letures: {
    type: Number,
    required: [true, "A course syllabus must have the number of lectures"],
  },
});

const CourseSyllabus = mongoose.model("CourseSyllabus", coursesyllabusSchema);

module.exports = CourseSyllabus;

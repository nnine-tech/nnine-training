const mongoose = require("mongoose");
const Course = require("./newCourseModel");

const CourseSyllabusSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
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
  lectures: {
    type: Number,
    required: [true, "A course syllabus must have the number of lectures"],
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: "Course",
    required: [true, "A syllabus must have a course"],
  },
});

const CourseSyllabus = mongoose.model("CourseSyllabus", CourseSyllabusSchema);

module.exports = CourseSyllabus;

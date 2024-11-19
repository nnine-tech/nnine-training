const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "A course must have a name"],
    maxlength: [40, "A course name must have less or equal then 40 characters"],
  },
  duration: {
    type: Number,
    required: [true, "A course name must have a duration"],
  },
  category: {
    type: String,
    required: [true, "A course should have a category"],
  },

  syllabus: { type: mongoose.Schema.ObjectId, ref: "CourseSyllabus" },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

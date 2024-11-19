const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A course must have a name"],
      unique: true,
      maxlength: [
        40,
        "A course name must have less or equal then 40 characters",
      ],
    },
    duration: {
      type: Number,
      required: [true, "A course name must have a duration"],
    },
    category: {
      type: String,
      required: [true, "A course should have a category"],
    },
    coursePhoto: {
      type: String,
      default: "default.jpeg",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

courseSchema.virtual("syllabus", {
  ref: "CourseSyllabus",
  foreignField: "course",
  localField: "_id",
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

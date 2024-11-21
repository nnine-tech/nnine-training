const mongoose = require("mongoose");

const trainerReviewSchema = new mongoose.Schema({
  trainer_id: {
    type: mongoose.Schema.ObjectId,
    ref: "trainer", // Make sure the model name matches exactly
    required: true,
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  description: {
    type: String,
    required: true,
  },

  reviewDate: {
    type: Date,
    default: Date.now, // Defaults to current date if no value is provided
  },

  // Uncomment and use this if you want to track the student/user who created the review
  //  studentId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Student",  // Replace with your actual user or student model reference
  //     required: true,
  //   },
});

const trainerReview = mongoose.model("trainerReview", trainerReviewSchema);
module.exports = trainerReview;

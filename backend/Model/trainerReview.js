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
    default: Date.now,
  },

  student_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },
});

const trainerReview = mongoose.model("trainerReview", trainerReviewSchema);
module.exports = trainerReview;

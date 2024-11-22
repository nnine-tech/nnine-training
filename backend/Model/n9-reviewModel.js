const { default: mongoose } = require("mongoose");

const n9reviewSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
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
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const n9review = mongoose.model("n9review", n9reviewSchema);
module.exports = n9review;

const { default: mongoose } = require("mongoose");
const n9review = require("../Model/n9-reviewModel");
const catchAsync = require("../Utils/catchAsync");

exports.createN9review = catchAsync(async (req, res, next) => {
  const { student_id, rating, description, created_at } = req.body;
  if (!student_id) {
    return res.status(400).json({
      message: "Invalid Student ID",
    });
  }
  if (typeof rating !== "number" || rating < 1 || rating > 5) {
    return res.status(400).json({
      message: "Rating must be a number between 1 and 5",
    });
  }

  const review = new n9review({
    student_id,
    rating,
    description,
    created_at,
  });
  await review.save();

  return res.status(201).json({
    result: review,
    message: "N9 review created successfully",
  });
});

exports.getN9reviews = catchAsync(async (req, res, next) => {
  const data = await n9review.find({});
  if (!data) {
    return res.status(400).json({
      message: "No reviews",
    });
  } else {
    return res.status(201).json({
      message: "Reviews get successfully",
      result: data,
    });
  }
});

exports.getSpecificN9review = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  if (!studentId) {
    return res.status(400).json({
      message: "Student Id is required",
    })
  }
  if (!mongoose.Types.ObjectId.isValid(studentId)) {
    return res.status(400).json({
      message: "Invalid student ID",
    });
  }
  const rating = await n9review.find({ student_id: studentId });

  if (rating === 0) {
    return res.status(400).json({
      message: "Rating must be number between 1 to 5",
    });
  } else {
    return res.status(201).json({
      result: rating,
      message: "Reviews getting successfully",
    });
  }
});

exports.updateN9review = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;
  const { rating, description, created_at } = req.body;
  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    return res.status(400).json({
      message: "Invalid review ID",
    });
  }
  if (rating && (typeof rating !== "number" || rating < 1 || rating > 5)) {
    return res.status(400).json({
      message: "Rating must be a number between 1 to 5",
    });
  }

  const updates = {};
  if (rating !== undefined) updates.rating = rating;
  if (description !== undefined) updates.description = description;
  if (created_at !== undefined) updates.created_at = new Date(created_at);

  const updatedReview = await n9review.findByIdAndUpdate(reviewId, updates, {
    new: true,
    runValidators: true,
  });
  if (!updatedReview) {
    return res.status(400).json({
      message: "Review not found",
    });
  } else {
    return res.status(201).json({
      result: updatedReview,
      message: "Review updated successfully",
    });
  }
});

exports.deleteN9review = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    return res.status(400).json({
      message: "Invalid review ID",
    });
  }

  const deleteReview = await n9review.findByIdAndDelete(reviewId);
  if (!deleteReview) {
    return res.status(400).json({
      message: "Review not found",
    });
  } else {
    return res.status(201).json({
      message: "Review deleted successfully",
      result: deleteReview,
    });
  }
});

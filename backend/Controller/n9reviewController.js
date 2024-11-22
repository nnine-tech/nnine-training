const { default: mongoose } = require("mongoose");
const n9review = require("../Model/n9-reviewModel");

exports.createN9review = async (req, res, next) => {
  try {
    const { student_id, rating, description, created_at } = req.body;
    console.log(student_id);
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
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({
      message: "An error occurred while creating the n9review",
    });
  }
};

exports.getN9reviews = async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while getting the reviews",
    });
  }
};

exports.getSpecificN9review = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    if (!studentId) {
      return res.status(400).json({
        message: "Student Id is required",
      });
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
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "An error occurred while getting reviews",
    });
  }
};

exports.updateN9review = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    console.log("ii", req.params);
    const { rating, description, created_at } = req.body;
    console.log("req", req.body);
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
    console.log(updatedReview);
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
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating reviews",
    });
  }
};

exports.deleteN9review = async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      message: "An error occurred while deleting the reviews",
    });
  }
};

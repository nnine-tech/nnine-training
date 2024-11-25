const { Router } = require("express");
const {
  createTrainerReview,
  getTrainerReview,
  getSpecificTrainerReview,
  updateTrainerReview,
  deleteTrainerReview,
} = require("../Controller/trainerReviewController");

const trainerReviewRouter = Router();
trainerReviewRouter.route("/").post(createTrainerReview);
trainerReviewRouter.route("/").get(getTrainerReview);

trainerReviewRouter.route("/:trainerId").get(getSpecificTrainerReview);
trainerReviewRouter.route("/:reviewId").put(updateTrainerReview);
trainerReviewRouter.route("/:reviewId").delete(deleteTrainerReview);

module.exports = trainerReviewRouter;

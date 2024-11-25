const { Router } = require("express");
const {
  getSpecificN9review,
  createN9review,
  getN9reviews,
  updateN9review,
  deleteN9review,
} = require("../Controller/n9reviewController");

const n9reviewRouter = Router();

n9reviewRouter.route("/").post(createN9review).get(getN9reviews);
n9reviewRouter.route("/:studentId").get(getSpecificN9review);
n9reviewRouter.route("/:reviewId").put(updateN9review);
n9reviewRouter.route("/:reviewId").delete(deleteN9review);
module.exports = n9reviewRouter;

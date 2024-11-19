const express = require("express");
const courseController = require("./../Controller/courseController");
const router = express.Router();

router
  .route("/")
  .get(courseController.getCourse)
  .post(courseController.CreateCourse);

module.exports = router;

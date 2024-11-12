const express = require("express");
const courseController = require("./../Controller/courseController");
const router = express.Router();

router
  .route("/courses")
  .get(courseController.getCourse)
  .post(courseController.Createcourse);

module.exports = router;

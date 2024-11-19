const express = require("express");
const courseController = require("./../Controller/courseController.js");
const router = express.Router();

//NESTED ROUTE
// router.use("/:courseId/syllabus");

router
  .route("/")
  .get(courseController.getAllCourse)
  .post(courseController.CreateCourse);

router.route(":id").get(courseController.getCourse);

module.exports = router;

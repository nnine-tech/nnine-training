const express = require("express");
const courseController = require("./../Controller/courseController.js");
const courseSyllabusRoute = require("./../Routes/courseSyllabusRoute.js");
const router = express.Router();

//NESTED ROUTE
router.use("/:courseId/syllabus", courseSyllabusRoute);

router
  .route("/")
  .get(courseController.getAllCourse)
  .post(courseController.CreateCourse);

router.route("/:id").get(courseController.getCourse);

module.exports = router;

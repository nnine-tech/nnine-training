const express = require("express");
const courseController = require("./../Controller/courseController.js");
const courseSyllabusRoute = require("./../Routes/courseSyllabusRoute.js");
const authController = require("./../Controller/authenticationController.js");
const router = express.Router();

// //NESTED ROUTE
// router.use("/:courseId/syllabus", courseSyllabusRoute);

router
  .route("/")
  .get(authController.protect, courseController.getAllCourse)
  .post(authController.protect, courseController.CreateCourse);

router
  .route("/:id")
  .get(courseController.getCourse)
  .delete(authController.protect, courseController.deleteCourse)
  .patch(authController.protect, courseController.updateCourse);

module.exports = router;

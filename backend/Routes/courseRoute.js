const express = require("express");
const courseController = require("./../Controller/courseController.js");
const courseSyllabusRoute = require("./../Routes/courseSyllabusRoute.js");
const authController = require("./../Controller/authenticationController");
const router = express.Router();

//NESTED ROUTE
router.use("/:courseId/syllabus", courseSyllabusRoute);

router
  .route("/")
  .get(authController.protect, courseController.getAllCourse)
  // .post(authController.protect, courseController.CreateCourse);
  .post(courseController.CreateCourse);

router.route("/total-course").get(courseController.totalCourse);

router
  .route("/:id")
  .get(authController.protect, courseController.getCourse)
  .delete(authController.protect, courseController.deleteCourse)
  .patch(authController.protect, courseController.updateCourse);

module.exports = router;

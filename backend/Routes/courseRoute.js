const express = require("express");
const courseController = require("./../Controller/courseController.js");
const courseSyllabusRoute = require("./../Routes/courseSyllabusRoute.js");
const authController = require("./../Controller/authenticationController");
const upload = require("./../Utils/FileUpload.js");
const router = express.Router();

//NESTED ROUTE
router.use("/:courseId/syllabus", courseSyllabusRoute);

router
  .route("/")
  .get(authController.protect, courseController.getAllCourse)
  .post(
    authController.protect,
    upload.uploadSinglePhoto("coursePhoto"),
    upload.imageNameSelector("course"),
    upload.resizePhoto,
    courseController.CreateCourse
  );

router
  .route("/:id")
  .get(authController.protect, courseController.getCourse)
  .delete(authController.protect, courseController.deleteCourse)
  .patch(
    authController.protect,
    upload.uploadSinglePhoto("coursePhoto"),
    upload.imageNameSelector("course"),
    upload.resizePhoto,
    courseController.updateCourse
  );

module.exports = router;

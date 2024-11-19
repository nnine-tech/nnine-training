const express = require("express");
const courseSyllabusController = require("./../Controller/courseSyllabusController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(
    courseSyllabusController.setCourseId,
    courseSyllabusController.createSyllabus
  )
  .get(courseSyllabusController.getSyllabus);

module.exports = router;

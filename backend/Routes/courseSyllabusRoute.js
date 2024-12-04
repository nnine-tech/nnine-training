const express = require("express");
const courseSyllabusController = require("./../Controller/courseSyllabusController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(
    courseSyllabusController.setCourseId,
    courseSyllabusController.createSyllabus
  )
  .get(courseSyllabusController.getAllSyllabus);

router
  .route("/:id")
  .delete(courseSyllabusController.deleteSyllabus)
  .get(courseSyllabusController.getSyllabus)
  .patch(courseSyllabusController.updateSyllabus);

module.exports = router;

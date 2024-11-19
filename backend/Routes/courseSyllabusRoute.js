const express = require("express");
const courseSyllabusController = require("./../Controller/courseSyllabusController");

const router = express.Router();

router
  .route("/")
  .post(courseSyllabusController.createSyllabus)
  .get(courseSyllabusController.getSyllabus);

module.exports = router;

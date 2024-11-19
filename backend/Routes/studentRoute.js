const express = require("express");
const {
  addStudentController,
  getFeeController,
} = require("../Controller/studentController");
const router = express.Router();

router.route("/add").post(addStudentController);
router.route("/readAll").get(getFeeController);

module.exports = router;

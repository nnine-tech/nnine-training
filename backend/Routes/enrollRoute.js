const express = require("express");

const {
  getEnroll,
  createEnroll,
  getSpecificEnrollNow,
  deleteEnrollNow,
} = require("../Controller/enrollController");

const enrollRouter = express.Router();
enrollRouter.route("/").post(createEnroll).get(getEnroll);
enrollRouter.route("/:id").get(getSpecificEnrollNow).delete(deleteEnrollNow);

module.exports = enrollRouter;

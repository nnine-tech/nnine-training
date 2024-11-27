const express = require("express");
// const upload = require("../utils/sendFile");
const { sendFileController } = require("../Controller/sendFileController");
const upload = require("../Utils/sendFile");

const fileRouter = express.Router();

fileRouter
  .route("/send-file")
  .post(upload.single("document"), sendFileController);

module.exports = fileRouter;

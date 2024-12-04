const express = require("express");
const {
  initializeEsewaPayment,
  completePayment,
} = require("../controller/esewaController");

const esewaRouter = express.Router();

esewaRouter.route("/initialize-esewa").post(initializeEsewaPayment);
esewaRouter.route("/complete-payment").get(completePayment);

module.exports = esewaRouter;

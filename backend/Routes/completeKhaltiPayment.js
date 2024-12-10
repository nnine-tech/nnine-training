const { Router } = require("express");
const {
  completeKhaltiPaymentController,
} = require("../Controller/khaltiPaymentController");

const completeKhaltiPaymentRouter = Router();

completeKhaltiPaymentRouter
  .route("/complete-khalti-payment")
  .get(completeKhaltiPaymentController);

module.exports = completeKhaltiPaymentController;

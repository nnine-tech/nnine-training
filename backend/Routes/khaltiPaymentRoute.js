const { Router } = require("express");
const {
  initializeKhaltiPaymentController,
  completeKhaltiPaymentController,
} = require("../Controller/khaltiPaymentController");

const khaltiPaymentRouter = Router();
khaltiPaymentRouter
  .route("/initialize-payment")
  .post(initializeKhaltiPaymentController);
khaltiPaymentRouter
  .route("/complete-khalti-payment")
  .get(completeKhaltiPaymentController);

module.exports = khaltiPaymentRouter;

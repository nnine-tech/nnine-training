const express = require("express");
const {
  addPaymentController,
  updatePaymentController,
  getAllController,
  searchController,
  totalRevenue,
  filterpayment,
  paymentStatus,
} = require("../Controller/feesController.js");
const router = express.Router();

router.route("/add").post(addPaymentController);
router.route("/get-all").get(getAllController);
router.route("/search").get(searchController);
router.route("/total-revenue").get(totalRevenue);
router.route("/total").get(filterpayment);

router.route("/update/:id").patch(updatePaymentController);

module.exports = router;

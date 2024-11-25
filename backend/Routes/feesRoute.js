const express = require("express");
const {
  addPaymentController,
  updatePaymentController,
  getAllController,
  searchController,
} = require("../Controller/feesController.js");
const router = express.Router();

router.route("/add").post(addPaymentController);
router.route("/get-all").get(getAllController);
router.route("/search").get(searchController);
router.route("/update/:id").patch(updatePaymentController);

module.exports = router;

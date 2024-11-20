const express = require("express");
const {
  addEventController,
  getEventController,
  updateEventController,
  deleteEventController,
  readSpecificEventController,
} = require("../Controller/eventController");
const router = express.Router();

router.route("/add").post(addEventController);
router.route("/readAll").get(getEventController);
router.route("/update/:id").patch(updateEventController);
router.route("/delete/:id").delete(deleteEventController);

module.exports = router;

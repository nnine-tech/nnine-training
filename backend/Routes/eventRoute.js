const express = require("express");
const {
  addEventController,
  getEventController,
  updateEventController,
  deleteEventController,
  readSpecificEventController,
} = require("../Controller/eventController");
const eventRouter = express.Router();

eventRouter.route("/add").post(addEventController);
eventRouter.route("/readAll").get(getEventController);
eventRouter.route("/update/:id").patch(updateEventController);
eventRouter.route("/delete/:id").delete(deleteEventController);

module.exports = eventRouter;

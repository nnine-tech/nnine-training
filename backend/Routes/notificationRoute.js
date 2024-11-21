const { Router } = require("express");
const {
  getAllNotificationController,
  createNotificationController,
} = require("../Controller/notificationController");

const notificationRouter = Router();
notificationRouter.route("/get-all").get(getAllNotificationController);
notificationRouter.route("/create").post(createNotificationController);

module.exports = notificationRouter;

const express = require("express");
const {
  messageController,
  getMessageController,
} = require("../Controller/messageController");

const messageRouter = express.Router();

messageRouter.route("/").post(messageController);
messageRouter.route("/:id").get(getMessageController);

module.exports = messageRouter;

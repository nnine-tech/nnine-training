const express = require("express");
const {
  createMessage,
  fetchMessages,
} = require("../Controller/messageController");

const messageRouter = express.Router();
messageRouter.route("/").post(createMessage);
messageRouter.route("/").get(fetchMessages);

module.exports = messageRouter;

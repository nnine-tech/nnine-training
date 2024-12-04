const { Router } = require("express");
const { createItem } = require("../controller/itemController");

const itemRouter = Router();

itemRouter.route("/create-item").post(createItem);

module.exports = itemRouter;

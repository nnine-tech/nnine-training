const express = require("express");
const userController = require("../Controller/userController");

const router = express.Router();

router.route("/").post(userController.createUser);

module.exports = router;

const express = require('express');
const { conversationController, conversationGetController } = require('../Controller/conversationController');


const router = express.Router();

router.route("/").post(conversationController)

router.route("/:id").get(conversationGetController)

module.exports = router;
const express = require("express");

const {
  createContactForm,
  getContactForm,
  getSpecificContactForm,
  updateContactForm,
} = require("../Controller/contactController");

const contactRouter = express.Router();
contactRouter.route("/").post(createContactForm).get(getContactForm);

contactRouter.route("/:id").get(getSpecificContactForm).put(updateContactForm);

module.exports = contactRouter;

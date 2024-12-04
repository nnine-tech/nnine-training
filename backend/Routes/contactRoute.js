const express = require("express");

const {
  createContactForm,
  getContactForm,
  getSpecificContactForm,
  deleteContactForm,
} = require("../Controller/contactController");

const contactRouter = express.Router();
contactRouter.route("/").post(createContactForm).get(getContactForm);

contactRouter
  .route("/:id")
  .get(getSpecificContactForm)
  .delete(deleteContactForm);

module.exports = contactRouter;

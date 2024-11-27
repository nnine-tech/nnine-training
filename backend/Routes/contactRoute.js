const { Router } = require("express");
const {
  createContactForm,
  getContactForm,
  getSpecificContactForm,
  updateContactForm,
} = require("../Controller/contactController");

const contactRouter = Router();
contactRouter.route("/").post(createContactForm).get(getContactForm);

contactRouter.route("/:id").get(getSpecificContactForm).put(updateContactForm);

module.exports = { contactRouter };

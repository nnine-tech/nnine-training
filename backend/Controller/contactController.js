const contact = require("../Model/contactModel");
const catchAsync = require("../Utils/catchAsync");

exports.createContactForm = catchAsync(async (req, res, next) => {
  const { fullName, phone, email, message } = req.body;
  const form = await contact.create({
    fullName,
    phone,
    email,
    message,
  });

  res.status(200).json({
    message: "Contact form created successfully",
    result: form,
  });
});

exports.getContactForm = catchAsync(async (req, res, next) => {
  const form = await contact.find({});
  res.status(200).json({
    message: "Contact form get successfully",
    result: form,
  });
});

exports.getSpecificContactForm = catchAsync(async (req, res, next) => {
  const form = await contact.findById(req.params.id.trim());
  console.log(form);
  if (!form) {
    return res.status(400).json({
      message: "Form could not found",
    });
  } else {
    return res.status(200).json({
      message: "Form get successfully",
      result: form,
    });
  }
});

exports.updateContactForm = catchAsync(async (req, res, next) => {
  let contactData = await contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(201).json({
    message: "Contact updated successfully",
    result: contactData,
  });
});

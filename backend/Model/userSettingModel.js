const mongoose = require("mongoose");

const addUserSettingModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name."],
  },
  phoneNo: {
    type: Number,
    required: [true, "A phone number is required."],
  },
  email: {
    type: String,
    required: [true, "An email address is requried."],
  },
  dateOfJoining: {
    type: Date,
    required: [true, "Date of joining is required."],
  },
  coursePosition: {
    type: String,
    required: [true, "Please specify your course or position."],
  },
  projects: {
    type: Number,
    required: [true, "Please enter the number of projects."],
  },
  image: {
    type: String,
    required: [true, "Choose a file."],
  },
});

const AddUserSetting = mongoose.model("AddUserSetting", addUserSettingModel);

module.exports = AddUserSetting;

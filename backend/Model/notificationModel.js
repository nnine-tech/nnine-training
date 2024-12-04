const mongoose = require("mongoose");
const { countDocuments } = require("./trainerReview");

const notification = new mongoose.Schema({
  date: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  title: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

const Notifications = mongoose.model("Notifications", notification);

module.exports = Notifications;

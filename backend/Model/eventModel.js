const { default: mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Event must have a title"],
    maxlength: [50, "Event title must have less or equal to 50 characters"],
  },
  startingDate: {
    type: Date,
    required: [true, "Event must have a starting date"],
  },
  endingDate: {
    type: Date,
    required: [true, "Event must have an ending date"],
    validate: {
      validator: function (value) {
        return value >= this.startingDate;
      },
      message: "Ending date must be after or equal to starting date",
    },
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

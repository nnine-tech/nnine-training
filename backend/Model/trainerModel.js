const { mongoose } = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  expertise: {
    type: String, 
    required: true,
  },
});

const trainer = mongoose.model("trainer", trainerSchema);
module.exports = trainer;

const { default: mongoose } = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: [true, "Sender Id is required"],
  },
  receiver: {
    type: String,
    required: [true, "Conversation Id is required"],
  },
  content: {
    type: String,
    required: [true, "Text is required"],
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;

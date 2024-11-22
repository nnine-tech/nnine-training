const Message = require("../Model/MessageModel");

exports.messageController = async (req, res, next) => {
  let newMessage = new Message(req.body);
  res.status(201).json({
    message: "Message sent successfully",
    data: newMessage,
  });
  try {
    let result = await newMessage.save();
    res.status(201).json({
      message: "Message sent successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getMessageController = async (req, res, next) => {
  try {
    let result = await Message.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Messages retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

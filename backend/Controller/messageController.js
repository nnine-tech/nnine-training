const Message = require("../Model/messageModel");

exports.createMessage = async (req, res, next) => {
  const { senderId, receiverId, content } = req.body;
  try {
    const result = await Message.create({
      sender: senderId,
      receiver: receiverId,
      content: content,
    });
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: result,
    });
  } catch (error) {
    res.statu(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.fetchMessages = async (req, res) => {
  const { userId1, userId2 } = req.query;

  try {
    const messages = await Message.find({
      $or: [
        { sender: userId1, receiver: userId2 },
        { sender: userId2, receiver: userId1 },
      ],
    });
    console.log(req.query);
    res.status(300).json({ success: true, data: messages });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const Notifications = require("../Model/notificationModel");

exports.getAllNotificationController = async (req, res, next) => {
  try {
    let result = await Notifications.find({});
    res.status(200).json({
      success: true,
      message: "Notification retrived successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to retrieve notifivations." + error.message,
    });
  }
};

exports.createNotificationController = async (req, res, next) => {
  try {
    let result = await Notifications.create(req.body);

    res.status(201).json({
      success: true,
      message: "Notification added successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

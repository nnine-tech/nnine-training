const Event = require("../Model/eventModel");

exports.addEventController = async (req, res, next) => {
  try {
    let result = await Event.create(req.body);
    res.status(201).json({
      message: "Event added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getEventController = async (req, res, next) => {
  try {
    let result = await Event.find({});
    res.status(200).json({
      success: true,
      message: "Event retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateEventController = async (req, res, next) => {
  try {
    let result = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Event updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteEventController = async (req, res, next) => {
  try {
    let result = await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Event Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

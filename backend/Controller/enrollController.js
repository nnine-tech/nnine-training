const catchAsync = require("../Utils/catchAsync");

const Enroll = require("../Model/enrollModel");

exports.createEnroll = catchAsync(async (req, res, next) => {
  const { email, fullName, contact, level, preferredCourse, shift } = req.body;

  const enrollNow = await Enroll.create({
    email,
    fullName,
    contact,
    level,
    preferredCourse,
    shift,
  });

  return res.status(200).json({
    message: "Enroll now created successfully",
    result: enrollNow,
  });
});

exports.getEnroll = catchAsync(async (req, res, next) => {
  const getEnrollNow = await Enroll.find({});

  if (!getEnrollNow) {
    return res.status(400).json({
      message: "Could not found getEnrollNow",
    });
  } else {
    return res.status(201).json({
      message: "enrollNow get successfully",
      result: getEnrollNow,
    });
  }
});

exports.getSpecificEnrollNow = catchAsync(async (req, res, next) => {
  const enrollNow = await Enroll.findById(req.params.id.trim());
  if (!enrollNow) {
    return res.status(400).json({
      message: "Could not found",
    });
  } else {
    return res.status(201).json({
      message: "Enroll now get successfully",
      result: enrollNow,
    });
  }
});

exports.deleteEnrollNow = catchAsync(async (req, res, next) => {
  const enrollNow = await Enroll.findByIdAndDelete(req.params.id);
  return res.status(201).json({
    message: "EnrollNow deleted successfully",
    result: enrollNow,
  });
});

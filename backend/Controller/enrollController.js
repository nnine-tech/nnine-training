const Enroll = require("../Model/enrollModel");

exports.const = catchAsync(async (req, res, next) => {
  const enrollNow = await Enroll.Create(req.body);
  return res.status(200).json({
    message: "Enroll now created successfully",
    result: enrollNow,
  });
});

exports.const = catchAsync(async (req, res, next) => {
  const getEnrollNow = await Enroll.find({});

  if (!getEnrollNow) {
    return res.status(400).json({
      message: "Could not found getEnrollNow",
    });
  } else {
    return res.status(201).json({
      message: "enrollNow get successfully",
    });
  }
});



const catchAsync = require("../Utils/catchAsync");

exports.sendFileController = catchAsync(async (req, res, next) => {
  let link = `https://admin/example`;
  res.status(200).json({
    success: true,
    message: "File uploads successfully",
    result: link,
  });
});

const User = require("../Model/UserModel");
const catchAsync = require("../Utils/catchAsync");

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      data: user,
    },
  });
});

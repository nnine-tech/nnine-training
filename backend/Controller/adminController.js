const Admin = require("../Model/newAdminModel");
const catchAsync = require("../Utils/catchAsync");

exports.createAdmin = catchAsync(async (req, res, next) => {
  const admin = await Admin.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      data: admin,
    },
  });
});

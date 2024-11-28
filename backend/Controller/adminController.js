const Admin = require("../Model/newAdminModel");
const AppError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/admins");
  },
  filename: (req, file, cb) => {
    //user-sdfgfdsgfdg-234543543543.jpeg
    const ext = file.mimetype.split("/")[1];
    cb(null, `admin-${req.admin.id}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image!.Please upload only images", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single("photo");

//FILTER FUNCTION
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

//FOR LOGGED IN ADMIN
exports.updateMe = async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);

  //CREATE ERROR IF USER POSTS PASSWORD DATA
  if (req.body.password || req.body.passwordConfirm)
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword",
        400
      )
    );
  //UPDATE USER DOCUMENT
  const filteredBody = filterObj(
    req.body,
    "name",
    "address",
    "phone",
    "bio",
    "taxId",
    "email"
  );
  if (req.file) filteredBody.photo = req.file.filename;
  const updatedAdmin = await Admin.findByIdAndUpdate(
    req.admin.id,
    filteredBody,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
  });
};

//FOR LOGGED IN ADMIN
exports.deleteMe = catchAsync(async (req, res, next) => {
  await Admin.findByIdAndUpdate(req.admin.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

//FOR SUPER ADMIN
exports.getAllAdmin = catchAsync(async (req, res, next) => {
  const admins = await Admin.find({});
  // console.log(admins);

  res.status(200).json({
    status: "success",
    data: {
      data: admins,
    },
  });
});

exports.getAdmin = catchAsync(async (req, res, next) => {
  const admin = await Admin.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      data: admin,
    },
  });
});

exports.deleteAdmin = catchAsync(async (req, res, next) => {
  const admin = await Admin.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: {
      data: null,
    },
  });
});

exports.updateAdmin = catchAsync(async (req, res, next) => {
  const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!admin) {
    return next(new AppError("No admin found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: admin,
    },
  });
});

const Admin = require("../Model/newAdminModel");
const AppError = require("./appError");
const catchAsync = require("./catchAsync");
const sharp = require("sharp");
const multer = require("multer");

// COMMENTED BECAUSE IT STORES DIRECTLY IN DISK
// USING SHARP TO RESIZE

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/img/admins");
//   },
//   filename: (req, file, cb) => {
//     //user-sdfgfdsgfdg-234543543543.jpeg
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `admin-${req.admin.id}-${Date.now()}.${ext}`);
//   },
// });
let limits = {
  fileSize: 1024 * 1024 * 2,
};

const multerStorage = multer.memoryStorage();

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
  limits,
});

exports.uploadSinglePhoto = (fieldName) => {
  return upload.single(fieldName);
};
exports.resizePhoto = (req, res, next) => {
  // console.log("------------------------", req);
  if (!req.file) {
    return next();
  }
  if (req.file.image_type === "admin")
    req.file.filename = `admin-${req.admin.id}-${Date.now()}.jpeg`;
  else if (req.file.image_type === "course")
    req.file.filename = `course-${req.admin.id}-${Date.now()}.jpeg`;
  else if (req.file.image_type === "courseSyllabus")
    req.file.filename = `courseSyllabus-${req.admin.id}-${Date.now()}.jpeg`;
  else req.file.filename = `picture-${req.admin.id}-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/admins/${req.file.filename}`);

  next();
};

exports.imageNameSelector = (type) => {
  return (req, res, next) => {
    req.file.image_type = type;
    next();
  };
};

const Admin = require("../Model/newAdminModel");
const AppError = require("./appError");
const catchAsync = require("./catchAsync");
const sharp = require("sharp");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

const dotenv = require("dotenv");
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

dotenv.config({
  path: "./config.env",
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
exports.resizePhoto = async (req, res, next) => {
  // console.log("------------------------", req);
  if (!req.file) {
    return next();
  }
  // if (req.file.image_type === "admin")
  //   req.file.filename = `admin-${req.admin.id}-${Date.now()}.jpeg`;
  // else if (req.file.image_type === "course")
  //   req.file.filename = `course-${req.admin.id}-${Date.now()}.jpeg`;
  // else if (req.file.image_type === "courseSyllabus")
  //   req.file.filename = `courseSyllabus-${req.admin.id}-${Date.now()}.jpeg`;
  // else req.file.filename = `picture-${req.admin.id}-${Date.now()}.jpeg`;

  let folder;
  if (req.file.image_type === "admin") {
    req.file.filename = `admin-${req.admin.id}-${Date.now()}.jpeg`;
    folder = "admins";
  } else if (req.file.image_type === "course") {
    req.file.filename = `course-${req.admin.id}-${Date.now()}.jpeg`;
    folder = "courses";
  } else if (req.file.image_type === "courseSyllabus") {
    req.file.filename = `courseSyllabus-${req.admin.id}-${Date.now()}.jpeg`;
    folder = "course_syllabus";
  } else {
    req.file.filename = `picture-${req.admin.id}-${Date.now()}.jpeg`;
    folder = "pictures";
  }

  // sharp(req.file.buffer)
  //   .resize(500, 500)
  //   .toFormat("jpeg")
  //   .jpeg({ quality: 90 })
  //   .toFile(`public/img/admins/${req.file.filename}`);

  try {
    // Resize the image with sharp and output as a buffer
    const buffer = await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toBuffer();

    // Upload the buffer to Cloudinary
    const result = await cloudinary.uploader.upload_stream(
      {
        folder: `img/${folder}`,
        public_id: req.file.filename, // File name without extension
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          return next(error);
        }

        // Store the Cloudinary URL in req.file for later use
        req.file.cloudinaryUrl = result.secure_url;

        next();
      }
    );

    streamifier.createReadStream(buffer).pipe(result);
  } catch (err) {
    console.error("Error uploading to Cloudinary:", err);
    return next(err);
  }
};

exports.imageNameSelector = (type) => {
  return (req, res, next) => {
    req.file.image_type = type;
    next();
  };
};

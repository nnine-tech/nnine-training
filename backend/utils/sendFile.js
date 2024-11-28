const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let limits = {
  fileSize: 1024 * 1024 * 2,
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let staticFolder = "./public";
    cb(null, staticFolder);
  },
  filename: (req, file, cb) => {
    let fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

let fileFilter = (req, file, cb) => {
  let validExtensions = [".png", ".PNG", ".jpg", ".JPG", ".jpeg", ".JPEG"];
  let originalName = file.originalname;
  let originalExtensions = path.extname(originalName);

  let isValidExtension = validExtensions.includes(originalExtensions);

  if (isValidExtension) {
    cb(null, true);
  } else {
    cb(new Error("File is not supported"));
  }
};

const upload = multer({
  storage: storage,

  fileFilter: fileFilter,

  limits: limits,
});

module.exports = upload;

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fs = require("fs");
const Admin = require("./../../Model/newAdminModel");
const Course = require("./../../Model/newCourseModel");
const CourseSyllabus = require("./../../Model/coursesyllabusModel");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

console.log(DB);
mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit if database connection fails
  });

//READING JSON FILE

// const admins = JSON.parse(fs.readFileSync(`${__dirname}/admins.json`, "utf-8"));
// const courseSyllabuses = JSON.parse(
//   fs.readFileSync(`${__dirname}/courseSyllabuses.json`, "utf-8")
// );
// const courses = JSON.parse(
//   fs.readFileSync(`${__dirname}/courses.json`, "utf-8")
// );
const admins = JSON.parse(fs.readFileSync(`${__dirname}/admins.json`, "utf-8"));

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Admin.create(admins);
    // await Course.create(courses);
    // await CourseSyllabus.create(courseSyllabuses);
    console.log("Data successfully loaded!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

//DELET DATA INTO DB
const deleteData = async () => {
  try {
    await Admin.deleteMany();
    await Course.deleteMany();
    await CourseSyllabus.deleteMany();
    console.log("Data successfully deleted!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

console.log(process.argv[2]);
if (process.argv[2] === "--import") importData();
else if (process.argv[2] === "--delete") deleteData();

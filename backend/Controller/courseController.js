// const Course = require("../Model/courseModel.js");
// const Course = require("../Model/newCourseModel.js");
// <<<<<<< HEAD
// const AppError = require("../Utils/appError.js");
// =======

// >>>>>>> 353225028f4421e1ed0bc7e9165a23747b588f24
// const APIFeatures = require("./../Utils/apiFeatures.js");
// const catchAsync = require("./../Utils/catchAsync.js");

// exports.CreateCourse = catchAsync(async (req, res, next) => {
//   const course = await Course.create(req.body);

//   res.status(200).json({
//     status: "success",
//     data: {
//       data: course,
//     },
//   });
//   // try {
//   // } catch (error) {
//   //   res.status(400).json({
//   //     status: "failure",
//   //     data: error,
//   //   });
//   // }
// });

// exports.getAllCourse = catchAsync(async (req, res, next) => {
//   //BUILDING QUERY
//   //FILTERING

//   //////////////////////////////////////////////////////////
//   // const queryObj = { ...req.query };
//   // const excludedFields = ["page", "sort", "limit", "fields"];
//   // excludedFields.forEach((el) => delete queryObj[el]);
//   // console.log(req.query);

//   // //ADVANCE FILTERING
//   // //////////////////
//   // //////////////////
//   // // {difficulty:'easy',duration:{$gte:5}} FILTER OBJECT
//   // // {difficulty:'easy',duration:{gte:5}}  QUERY OBJECT

//   // //CONVERTING TO STRING
//   // let queryStr = JSON.stringify(queryObj);

//   // //CONVERTING TO FILTER OBJECT
//   // queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
//   // // console.log(JSON.parse(queryStr));

//   // //WORKS FOR QUERY STIRNG WHICH HAS OPERATORS
//   // let query = Course.find(JSON.parse(queryStr));
//   //////////////////////////////////////////////////////

//   //SORTING
//   //////////////////
//   //////////////////
//   //////////////////
//   // if (req.query.sort) {
//   //   // console.log(sort);
//   //   const sortBy = req.query.sort.split(",").join(" ");
//   //   query=query.sort(sortBy);
//   // } else {
//   //   query = query.sort("coursename");
//   // }

//   //////////////////////
//   //////////////////////
//   //////////////////////
//   //////////////////////
//   //Field limiting
//   // if (req.query.fields) {
//   //   const fields = req.query.fields.split(",").join(" ");
//   //   query = query.select(fields);
//   // } else {
//   //   query = query.select("-__v");
//   // }

//   //////////////////////
//   //////////////////////
//   //////////////////////
//   //////////////////////
//   //PAGINATION
//   // const page = req.query.page * 1 || 1;
//   // const limit = req.query.limit * 1 || 100;
//   // const skip = (page - 1) * limit;
//   // query = query.skip(skip).limit(limit);

//   // if (req.query.page) {
//   //   const numCourse = await Course.countDocuments();
//   //   if (skip > numCourse)
//   //     throw new Error(
//   //       "This page doesn't exist. You are skipping more document than you have in database"
//   //     );
//   // }

//   //EXECUTE QUERY
//   const features = new APIFeatures(Course.find(), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();
//   const course = await features.query;

//   // const course = await Course.find(req.query);
//   res.status(200).json({
//     result: course.length,
//     status: "success",
//     data: {
//       data: course,
//     },
//   });
// });

// exports.getCourse = catchAsync(async (req, res, next) => {
//   console.log(req.params.id);
//   const course = await Course.findById(req.params.id).populate("syllabus");

//   if (!course) {
//     return next(new AppError("No course found with that ID", 404));
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       data: course,
//     },
//   });
// });

// exports.deleteCourse = catchAsync(async (req, res, next) => {
//   const course = await Course.findByIdAndDelete(req.params.id);
//   if (!course) {
//     return next(new AppError("No course found with that ID", 404));
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       data: course,
//     },
//   });
// });

// exports.updateCourse = catchAsync(async (req, res, next) => {
//   const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     //RUN VALIDATOR IS TURNED OFF FOR NOW BUT MAY REQUIRE TO BE TURNED OFF LATER
//     // runValidators: true,
//   });
//   if (!course) {
//     return next(new AppError("No course found with that ID", 404));
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       data: course,
//     },
//   });
// });

const Course = require("../Model/courseModel.js");

const Course = require("../Model/newCourseModel.js");

const APIFeatures = require("./../Utils/apiFeatures.js");
exports.getAllCourse = async (req, res, next) => {
  try {
    //BUILDING QUERY
    //FILTERING

    //////////////////////////////////////////////////////////
    // const queryObj = { ...req.query };
    // const excludedFields = ["page", "sort", "limit", "fields"];
    // excludedFields.forEach((el) => delete queryObj[el]);
    // console.log(req.query);

    // //ADVANCE FILTERING
    // //////////////////
    // //////////////////
    // // {difficulty:'easy',duration:{$gte:5}} FILTER OBJECT
    // // {difficulty:'easy',duration:{gte:5}}  QUERY OBJECT

    // //CONVERTING TO STRING
    // let queryStr = JSON.stringify(queryObj);

    // //CONVERTING TO FILTER OBJECT
    // queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    // // console.log(JSON.parse(queryStr));

    // //WORKS FOR QUERY STIRNG WHICH HAS OPERATORS
    // let query = Course.find(JSON.parse(queryStr));
    //////////////////////////////////////////////////////

    //SORTING
    //////////////////
    //////////////////
    //////////////////
    // if (req.query.sort) {
    //   // console.log(sort);
    //   const sortBy = req.query.sort.split(",").join(" ");
    //   query=query.sort(sortBy);
    // } else {
    //   query = query.sort("coursename");
    // }

    //////////////////////
    //////////////////////
    //////////////////////
    //////////////////////
    //Field limiting
    // if (req.query.fields) {
    //   const fields = req.query.fields.split(",").join(" ");
    //   query = query.select(fields);
    // } else {
    //   query = query.select("-__v");
    // }

    //////////////////////
    //////////////////////
    //////////////////////
    //////////////////////
    //PAGINATION
    // const page = req.query.page * 1 || 1;
    // const limit = req.query.limit * 1 || 100;
    // const skip = (page - 1) * limit;
    // query = query.skip(skip).limit(limit);

    // if (req.query.page) {
    //   const numCourse = await Course.countDocuments();
    //   if (skip > numCourse)
    //     throw new Error(
    //       "This page doesn't exist. You are skipping more document than you have in database"
    //     );
    // }

    //EXECUTE QUERY
    const features = new APIFeatures(Course.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const course = await features.query;

    // const course = await Course.find(req.query);
    res.status(200).json({
      result: course.length,
      status: "success",
      data: {
        data: course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      error: error,
    });
  }
};

exports.CreateCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        data: course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      data: error,
    });
  }
};

exports.getCourse = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const course = await Course.findById(req.params.id).populate("syllabus");
    res.status(200).json({
      status: "success",
      data: {
        data: course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      data: error,
    });
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        data: course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      data: error,
    });
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      //RUN VALIDATOR IS TURNED OFF FOR NOW BUT MAY REQUIRE TO BE TURNED OFF LATER
      // runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        data: course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      data: error,
    });
  }
};

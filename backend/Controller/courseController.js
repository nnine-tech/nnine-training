const Course = require("../Model/courseModel.js");

exports.getAllCourse = async (req, res, next) => {
  const course = await Course.find();
  res.status(200).json({
    status: "success",
    data: {
      data: course,
    },
  });
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
    console.log(error);
  }
};

exports.getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id).populate("syllabus");
    res.status(200).json({
      status: "success",
      data: {
        data: course,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

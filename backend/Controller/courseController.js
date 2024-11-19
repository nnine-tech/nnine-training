const Course = require("../Model/newCourseModel.js");

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
    res.status(401).json({
      status: "fail",
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
    console.log(error);
  }
};

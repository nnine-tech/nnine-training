const Course = require("../Model/courseModel");

exports.getCourse = async (req, res, next) => {
  const course = await Course.find();
  res.status(200).json({
    status: "success",
    data: {
      data: course,
    },
  });
};

exports.Createcourse = async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      data: course,
    },
  });
};

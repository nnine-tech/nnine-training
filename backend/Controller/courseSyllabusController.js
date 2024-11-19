const CourseSyllabus = require("../Model/coursesyllabusModel");

exports.createSyllabus = async (req, res, next) => {
  const syllabus = await CourseSyllabus.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      data: syllabus,
    },
  });
};

exports.getSyllabus = async (req, res, next) => {
  const syllabus = await CourseSyllabus.find();
  res.status(200).json({
    status: "success",
    data: {
      data: syllabus,
    },
  });
};

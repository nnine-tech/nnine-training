const CourseSyllabus = require("../Model/coursesyllabusModel");

exports.setCourseId = (req, res, next) => {
  //allow nested routes
  if (!req.body.course) req.body.course = req.params.courseId;
  console.log(req.body);
  next();
};

exports.createSyllabus = async (req, res, next) => {
  const syllabus = await CourseSyllabus.create(req.body);
  console.log(syllabus);
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

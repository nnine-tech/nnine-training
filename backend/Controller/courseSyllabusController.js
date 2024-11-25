const CourseSyllabus = require("../Model/coursesyllabusModel");
const catchAsync = require("./../Utils/catchAsync");

exports.setCourseId = (req, res, next) => {
  //allow nested routes
  if (!req.body.course) req.body.course = req.params.courseId;
  console.log(req.body);
  next();
};

exports.createSyllabus = async (req, res, next) => {
  try {
    const syllabus = await CourseSyllabus.create(req.body);
    console.log(syllabus);
    res.status(200).json({
      status: "success",
      data: {
        data: syllabus,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      error: error,
    });
  }
};

exports.getAllSyllabus = async (req, res, next) => {
  try {
    const syllabus = await CourseSyllabus.find();
    res.status(200).json({
      status: "success",
      data: {
        data: syllabus,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      error: error,
    });
  }
};

exports.getSyllabus = catchAsync(async (req, res, next) => {
  const syllabus = await CourseSyllabus.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      data: syllabus,
    },
  });
});

exports.updateSyllabus = async (req, res, next) => {
  try {
    const syllabus = await CourseSyllabus.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        //RUN VALIDATOR IS TURNED OFF FOR NOW BUT MAY REQUIRE TO BE TURNED OFF LATER
        // runValidator: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        data: syllabus,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      error: error,
    });
  }
};
exports.deleteSyllabus = async (req, res, next) => {
  try {
    const syllabus = await CourseSyllabus.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        data: syllabus,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      error: error,
    });
  }
};

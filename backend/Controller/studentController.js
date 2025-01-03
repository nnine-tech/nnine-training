const Student = require("../Model/studentModel.js");

exports.addStudentController = async (req, res, next) => {
  try {
    const result = await Student.create(req.body);
    res.status(201).json({
      message: "Student added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getStudentController = async (req, res, next) => {
  try {
    const result = await Student.find();
    res.status(200).json({
      message: "Student details fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.updateStudentController = async (req, res, next) => {
  try {
    const result = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Student updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.searchStudent = async (req, res, next) => {
  try {
    const item = req.query.item;
    const pipeline = [];
    pipeline.push({
      $match: {
        $or: [
          { name: { $regex: item, $options: "i" } },
          { phone: { $regex: item, $options: "i" } },
          { email: { $regex: item, $options: "i" } },
        ],
      },
    });
    const result = await Student.aggregate(pipeline);
    res.status(200).json({
      message: "Students found successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.totalStudents = async (req, res, next) => {
  try {
    let result = await Student.countDocuments();
    res.status(200).json({
      message: "Total number of students",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const result = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Student deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.studentEnrollment = async (req, res, next) => {
  try {
    const Janaury = await Student.countDocuments({
      enrollmentDate: { $regex: "Jan" },
    });
    const February = await Student.countDocuments({
      enrollmentDate: { $regex: "Feb" },
    });
    const March = await Student.countDocuments({
      enrollmentDate: { $regex: "Mar" },
    });
    const April = await Student.countDocuments({
      enrollmentDate: { $regex: "Apr" },
    });
    const May = await Student.countDocuments({
      enrollmentDate: { $regex: "May" },
    });
    const June = await Student.countDocuments({
      enrollmentDate: { $regex: "Jun" },
    });
    const July = await Student.countDocuments({
      enrollmentDate: { $regex: "Jul" },
    });
    const August = await Student.countDocuments({
      enrollmentDate: { $regex: "Aug" },
    });
    const September = await Student.countDocuments({
      enrollmentDate: { $regex: "Sep" },
    });
    const October = await Student.countDocuments({
      enrollmentDate: { $regex: "Oct" },
    });
    const November = await Student.countDocuments({
      enrollmentDate: { $regex: "Nov" },
    });
    const December = await Student.countDocuments({
      enrollmentDate: { $regex: "Dec" },
    });
    res.status(200).json({
      message: "Student enrollments fetched successfully",
      Jan: Janaury,
      Feb: February,
      Mar: March,
      Apr: April,
      May: May,
      Jun: June,
      Jul: July,
      Aug: August,
      Sep: September,
      Oct: October,
      Nov: November,
      Dec: December,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.topCourse = async (req, res, next) => {
  try {
    let mernStack = await Student.find({
      enrolledCourse: { $regex: "Mern", $options: "i" },
    });
    let flutter = await Student.find({
      enrolledCourse: { $regex: "flutter", $options: "i" },
    });
    let digitalMarketing = await Student.find({
      enrolledCourse: { $regex: "Digital Marketing", $options: "i" },
    });
    let uiux = await Student.find({
      enrolledCourse: { $regex: "ui/ux", $options: "i" },
    });

    let result = {
      MERN: mernStack.length,
      Flutter: flutter.length,
      DigitalMarketing: digitalMarketing.length,
      UiUX: uiux.length,
    };

    let sortedCourses = Object.entries(result)
      .sort((a, b) => b[1] - a[1])
      .map(([course, length]) => ({ course, length }));

    res.status(200).json({
      message: "Top courses sorted by length",
      sortedCourses,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

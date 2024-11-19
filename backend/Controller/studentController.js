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

exports.getFeeController = async (req, res, next) => {
  try {
    const result = await Student.find();
    res.status(200).json({
      message: "Fee details fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

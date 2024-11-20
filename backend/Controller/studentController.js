const Student = require("../Model/studentModel.js");

exports.addStudentController = async (req, res, next) => {
  try {
    const result = await Student.create(req.body);
    res.status(201).json({
      message: "Students added successfully",
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
      message: "Fee details fetched successfully",
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
          { firstName: { $regex: item, $options: "i" } },
          { lastName: { $regex: item, $options: "i" } },
          { department: { $regex: item, $options: "i" } },
          { email: { $regex: item, $options: "i" } },
          { courseTaken: { $regex: item, $options: "i" } },
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

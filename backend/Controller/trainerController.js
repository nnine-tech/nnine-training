const trainer = require("../Model/trainerModel");
const catchAsync = require("../Utils/catchAsync");

exports.createTrainer = catchAsync(async (req, res) => {
  const { name, email, expertise } = req.body;
  console.log(name);

  const trainerData = await trainer.create({
    name,
    email,
    expertise,
  });

  res.status(200).json({
    result: { trainerData },
    success: true,
    message: "trainer created successfully",
  });
});

exports.getAllTrainer = catchAsync(async (req, res, next) => {
  let data = await trainer.find({});
  res.status(200).json({
    result: data,
    message: "All Trainer get  successfully",
  });
});

exports.getSpecificTrainer = catchAsync(async (req, res, next) => {
  let data = await trainer.findById(req.params.id.trim());
  res.status(200).json({
    result: data,
    message: "Trainer get successfully",
  });
});

exports.updateTrainer = catchAsync(async (req, res, next) => {
  let trainerData = await trainer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    result: trainerData,
    message: "Trainer updated successfully",
  });
});

exports.deleteTrainer = catchAsync(async (req, res, next) => {
  let trainerData = await trainer.findByIdAndDelete(req.params.id);
  res.status(200).json({
    result: trainerData,
    message: "Trainer deleted successfully",
  });
});

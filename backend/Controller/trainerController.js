const trainer = require("../Model/trainerModel");

exports.createTrainer = async (req, res, next) => {
  console.log(req);
  const { name, email, expertise } = req.body;

  try {
    const trainerdata = await trainer.create({
      name,
      email,
      expertise,
    });

    res.status(200).json({
      result: { trainerdata },
      success: true,
      message: "trainer created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured while creating the trainer",
    });
  }
};

exports.getAllTrainer = async (req, res, next) => {
  try {
    let data = await trainer.find({});
    res.status(200).json({
      result: data,
      message: "All Trainer get  successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured while getting the trainer ",
    });
  }
};

exports.getSpecificTrainer = async (req, res, next) => {
  try {
    let data = await trainer.findById(req.params.id.trim());
    console.log(data);
    res.status(200).json({
      result: data,
      message: "Trainer get successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while getting the trainer ",
    });
    console.log(error);
  }
};

exports.updateTrainer = async (req, res, next) => {
  try {
    let trainerData = await trainer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      result: trainerData,
      message: "Trainer updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the trainer",
    });
  }
};

exports.deleteTrainer = async (req, res, next) => {
  try {
    let trainerData = await trainer.findByIdAndDelete(req.params.id);
    res.status(200).json({
      result: trainerData,
      message: "Trainer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the Trainer",
    });
  }
};

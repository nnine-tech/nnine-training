const AddUserSetting = require("../Model/userSettingModel");

exports.addUserSettingController = async (req, res, next) => {
  try {
    let result = await AddUserSetting.create(req.body);
    res.status(201).json({
      success: true,
      message: "User has been added successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add user" + error.message,
    });
  }
};

exports.readAllUserSettingController = async (req, res, next) => {
  try {
    let result = await AddUserSetting.find({});
    res.status(200).json({
      success: true,
      message: "All users have been retrieved successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to retrieve users." + error.message,
    });
  }
};

exports.searchUsersSettingController = async (req, res, next) => {
  try {
    let item = req.query.item;
    let search = [];
    let matchCondition = {
      $match: {
        $or: [
          { name: { $regex: item, $options: "i" } },
          { email: { $regex: item, $options: "i" } },
          { pnoneNo: { $regex: item, $options: "i" } },
        ],
      },
    };
    search.push(matchCondition);
    let result = await AddUserSetting.aggregate(search);
    res.status(200).json({
      success: true,
      message: "Search completed successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Search failed." + error.message,
    });
  }
};

exports.updateUserSettingController = async (req, res, next) => {
  try {
    let result = await AddUserSetting.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json({
      success: true,
      message: "User has been updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update user." + error.message,
    });
  }
};

exports.deleteUserSettingController = async (req, res, next) => {
  try {
    let result = await AddUserSetting.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User has been deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete user." + error.message,
    });
  }
};

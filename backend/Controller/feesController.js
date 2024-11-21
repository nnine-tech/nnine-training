const Fees = require("../Model/fee.model.js");

exports.addPaymentController = async (req, res, next) => {
  try {
    const result = await Fees.create(req.body);

    res.status(200).json({
      success: true,
      message: "Payment has been successfully recorded.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add payment." + error.message,
    });
  }
};

exports.getAllController = async (req, res, next) => {
  try {
    let result = await Fees.find({});

    res.status(200).json({
      success: true,
      message: "Successfully retrieved all payment records.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to retrieve data." + error.message,
    });
  }
};

exports.updatePaymentController = async (req, res, next) => {
  try {
    let result = await Fees.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Payment details have been updated updated successfully.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update payment details." + error.message,
    });
  }
};

exports.searchController = async (req, res, next) => {
  try {
    let item = req.query.item;
    let search = [];
    let matchCondition = {
      $match: {
        $or: [
          { name: { $regex: item, $options: "i" } },
          { course: { $regex: item, $options: "i" } },
        ],
      },
    };

    search.push(matchCondition);

    let result = await Fees.aggregate(search);

    res.status(200).json({
      success: true,
      message: "Search completed successfully.",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Search failed." + error.message,
    });
  }
};

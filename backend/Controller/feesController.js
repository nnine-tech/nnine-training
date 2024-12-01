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

exports.totalRevenue = async (req, res, next) => {
  try {
    let result = await Fees.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$amountPaid" },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.filterpayment = async (req, res, next) => {
  try {
    let Sunday = await Fees.aggregate([
      {
        $match: {
          dueDate: { $regex: "Sun" }, // Match documents where dueDate contains "Sun"
        },
      },
      {
        $group: {
          _id: null,
          totalAmountPaid: { $sum: "$amountPaid" },
        },
      },
    ]);

    let Monday = await Fees.aggregate([
      {
        $match: {
          dueDate: { $regex: "Mon" },
        },
      },
      {
        $group: {
          _id: null,
          totalAmountPaid: { $sum: "$amountPaid" },
        },
      },
    ]);

    let Tuesday = await Fees.aggregate([
      {
        $match: {
          dueDate: { $regex: "Tue" },
        },
      },
      {
        $group: {
          _id: null,
          totalAmountPaid: { $sum: "$amountPaid" },
        },
      },
    ]);

    let Wednesday = await Fees.aggregate([
      {
        $match: {
          dueDate: { $regex: "Wed" },
        },
      },
      {
        $group: {
          _id: null,
          totalAmountPaid: { $sum: "$amountPaid" },
        },
      },
    ]);

    let Thursday = await Fees.aggregate([
      {
        $match: {
          dueDate: { $regex: "Thu" },
        },
      },
      {
        $group: {
          _id: null,
          totalAmountPaid: { $sum: "$amountPaid" },
        },
      },
    ]);

    let Friday = await Fees.aggregate([
      {
        $match: {
          dueDate: { $regex: "Fri" },
        },
      },
      {
        $group: {
          _id: null,
          totalAmountPaid: { $sum: "$amountPaid" },
        },
      },
    ]);

    let Saturday = await Fees.aggregate([
      {
        $match: {
          dueDate: { $regex: "Sat" },
        },
      },
      {
        $group: {
          _id: null,
          totalAmountPaid: { $sum: "$amountPaid" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Weekly Revenue Overview",
      Sun: Sunday,
      Mon: Monday,
      Tue: Tuesday,
      Wed: Wednesday,
      Thu: Thursday,
      Fri: Friday,
      Sat: Saturday,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.paymentStatus = async (req, res, next) => {
  try {
    let test = await Fees.countDocuments();
    let result = await Fees.find({ outstandingBalance: 0 });

    let status = result.length;
    res.status(200).json({
      success: true,
      message: "Payment status has been retrieved successfully.",
      paid: status,
      unpaid: test - result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// const User = require("../Model/UserModel");
// const catchAsync = require("../Utils/catchAsync");

// exports.createUser = catchAsync(async (req, res, next) => {
//   const user = await User.create(req.body);
//   res.status(200).json({
//     status: "success",
//     data: {
//       data: user,
//     },
//   });
// });
// const AddUser = require("../Model/userModel");

// exports.addUserController = async (req, res, next) => {
//   try {
//     let result = await AddUser.create(req.body);
//     res.status(201).json({
//       success: true,
//       message: "User has been added successfully.",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Failed to add user." + error.message,
//     });
//   }
// };

// exports.getAllUserController = async (req, res, next) => {
//   try {
//     let result = await AddUser.find({});

//     res.status(200).json({
//       success: true,
//       message: "All users have been retrieved successfully.",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Failed t retrieve users." + error.message,
//     });
//   }
// };

// exports.searchUsersController = async (req, res, next) => {
//   try {
//     let item = req.query.item;
//     let search = [];

//     let matchCondition = {
//       $match: {
//         $or: [
//           { name: { $regex: item, $options: "i" } },
//           { email: { $regex: item, $options: "i" } },
//           { pnoneNo: { $regex: item, $options: "i" } },
//         ],
//       },
//     };

//     search.push(matchCondition);

//     let result = await AddUser.aggregate(search);

//     res.status(200).json({
//       success: true,
//       message: "Search completed successfully.",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Search failed." + error.message,
//     });
//   }
// };

// exports.updateUserController = async (req, res, next) => {
//   try {
//     let result = await AddUser.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });

//     res.status(201).json({
//       success: true,
//       message: "User has been updated successfully.",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Failed to update user." + error.message,
//     });
//   }
// };

// exports.deleteUserController = async (req, res, next) => {
//   try {
//     let result = await AddUser.findByIdAndDelete(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "User has been deleted successfully.",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Failed to delete user." + error.message,
//     });
//   }
// };

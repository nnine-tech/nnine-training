const express = require("express");
const {
  addUserController,
  getAllUserController,
  updateUserController,
  searchUsersController,
  deleteUserController,
} = require("../Controller/userController");

const userRouter = express.Router();

userRouter.route("/add-user").post(addUserController);

userRouter.route("/get-all").get(getAllUserController);

userRouter.route("/search").get(searchUsersController);

userRouter.route("/update/:id").patch(updateUserController);

userRouter.route("/delete/:id").delete(deleteUserController);

  module.exports = {userRouter};




  




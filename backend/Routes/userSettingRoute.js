const { Router } = require("express");
const {
  addUserSettingController,
  readAllUserSettingController,
  updateUserSettingController,
  deleteUserSettingController,
  searchUsersSettingController,
} = require("../Controller/userSettingController");

const userSettingRouter = Router();
userSettingRouter.route("/add-user").post(addUserSettingController);
userSettingRouter.route("/read-all-user").get(readAllUserSettingController);
userSettingRouter.route("/search-user").get(searchUsersSettingController);
userSettingRouter.route("/update-user/:id").patch(updateUserSettingController);
userSettingRouter.route("/delete-user/:id").delete(deleteUserSettingController);

module.exports = userSettingRouter;

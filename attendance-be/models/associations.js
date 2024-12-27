import Attendance from "./attendance.model.js";
import Department from "./department.model.js";
import Role from "./role.model.js";
import User from "./user.model.js";
import WorkSchedule from "./workschedule.model.js";

const setUpAssociations = () => {
  //work schedule association
  WorkSchedule.hasMany(User, { foreignKey: "workScheduleId", as: "users" });
  User.belongsTo(WorkSchedule, {
    foreignKey: "workScheduleId",
    as: "workSchedule",
  });

  //attendance association
  User.hasMany(Attendance, { foreignKey: "userId", as: "attendances" });
  Attendance.belongsTo(User, { foreignKey: "userId", as: "user" });

  //department association
  Department.hasMany(User, { foreignKey: "departmentId", as: "users" });
  User.belongsTo(Department, { foreignKey: "departmentId", as: "department" });

  //role association
  Role.hasMany(User, { foreignKey: "roleId", as: "users" });
  User.belongsTo(Role, { foreignKey: "roleId", as: "role" });
};

export default setUpAssociations;

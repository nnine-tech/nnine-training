import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Attendance extends Model {}

Attendance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    punchIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    punchOut: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    workingHours: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM("Present", "Absent", "Late"),
      allowNull: true,
      defaultValue: "Absent",
    },
  },
  {
    sequelize,
    modelName: "attendance",
    timestamps: true,
  }
);

export default Attendance;
Attendance.addHook("beforeUpdate", (attendance) => {
  if (
    attendance.changed("punchOut") &&
    attendance.punchIn &&
    attendance.punchOut
  ) {
    attendance.workingHours =
      Math.abs(new Date(attendance.punchOut) - new Date(attendance.punchIn)) /
      (1000 * 60 * 60); // Convert ms to hours
  }
});

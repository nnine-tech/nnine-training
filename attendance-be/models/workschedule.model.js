import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class WorkSchedule extends Model {}

WorkSchedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, // E.g., "Sun-Fri"
      allowNull: false,
      unique: true,
    },
    days: {
      type: DataTypes.JSON, // Stores days as an array
      allowNull: false,
      defaultValue: [0, 1, 2, 3, 4, 5], // Sunday to Friday
    },
  },
  {
    sequelize,
    modelName: "workschedule",
    timestamps: true,
  }
);

export default WorkSchedule;

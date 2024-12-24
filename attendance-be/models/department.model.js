import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Department extends Model {}

Department.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "department",
    timestamps: true,
  }
);

export default Department;

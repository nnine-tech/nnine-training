import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Role extends Model {}

Role.init(
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
    modelName: "role",
    timestamps: true,
  }
);

export default Role;

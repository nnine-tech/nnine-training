import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Holiday extends Model {}

Holiday.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "holiday",
    timestamps: true,
  }
);

export default Holiday;

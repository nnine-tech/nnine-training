import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import bcrypt from "bcrypt";

class User extends Model {
  static async hashPassword(user) {
    if (user.password && user.changed("password")) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    } else if (user.password === null) {
      console.log("Password is null, skipping hashing.");
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    workScheduleId: {
      type: DataTypes.INTEGER,
      references: {
        model: "workschedules",
        key: "id",
      },
      allowNull: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    panNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        await User.hashPassword(user);
      },
      beforeUpdate: async (user) => {
        await User.hashPassword(user);
      },
    },
  }
);

export default User;

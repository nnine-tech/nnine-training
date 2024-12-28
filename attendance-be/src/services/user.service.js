import Department from "../../models/department.model.js";
import Role from "../../models/role.model.js";
import User from "../../models/user.model.js";
import WorkSchedule from "../../models/workschedule.model.js";

const createUser = async ({
  name,
  email,
  password,
  roleId,
  departmentId,
  workScheduleId,
  phone,
  panNo,
  photo,
  address,
}) => {
  return await User.create({
    name: name,
    email: email,
    password: password,
    roleId: roleId,
    departmentId: departmentId,
    workScheduleId: workScheduleId,
    phone: phone,
    panNo: panNo,
    photo: photo,
    address: address,
  });
};

const getUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: WorkSchedule,
        as: "workSchedule",
        attributes: ["id", "name", "days"],
      },
      {
        model: Department,
        as: "department",
        attributes: ["id", "name"],
      },
      {
        model: Role,
        as: "role",
        attributes: ["id", "name"],
      },
    ],
  });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email: email } });
};

const updateUser = async ({
  id,
  name,
  email,
  password,
  roleId,
  departmentId,
  phone,
  photo,
  workScheduleId,
  panNo,
  address,
}) => {
  return await User.update(
    {
      name: name,
      email: email,
      password: password,
      roleId: roleId,
      departmentId: departmentId,
      phone: phone,
      photo: photo,
      workScheduleId: workScheduleId,
      panNo: panNo,
      address: address,
    },
    { where: { id: id } }
  );
};

const deleteUser = async (id) => {
  return await User.destroy({ where: { id: id } });
};

export {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
};

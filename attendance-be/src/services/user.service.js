import User from "../../models/user.model.js";

const createUser = async (name, email, password, roleId, departmentId) => {
  return await User.create({
    name: name,
    email: email,
    password: password,
    roleId: roleId,
    departmentId: departmentId,
  });
};

const getUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email: email } });
};

const updateUser = async (id, name, email, password, roleId, departmentId) => {
  return await User.update(
    {
      name: name,
      email: email,
      password: password,
      roleId: roleId,
      departmentId: departmentId,
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

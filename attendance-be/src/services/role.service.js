import Role from "../../models/role.model.js";

const createRole = async (name) => {
  return await Role.create({
    name: name,
  });
};

const getRoles = async () => {
  return await Role.findAll();
};

const updateRole = async (id, name) => {
  return await Role.update({ name: name }, { where: { id: id } });
};

const deleteRole = async (id) => {
  return await Role.destroy({ where: { id: id } });
};

export { createRole, getRoles, updateRole, deleteRole };

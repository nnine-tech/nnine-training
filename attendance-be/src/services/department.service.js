import Department from "../../models/department.model.js";

const createDepartment = async (name) => {
  return await Department.create({
    name: name,
  });
};

const getDepartments = async () => {
  return await Department.findAll();
};

const updateDepartment = async (id, name) => {
  return await Department.update({ name: name }, { where: { id: id } });
};

const deleteDepartment = async (id) => {
  return await Department.destroy({ where: { id: id } });
};

export { createDepartment, getDepartments, updateDepartment, deleteDepartment };

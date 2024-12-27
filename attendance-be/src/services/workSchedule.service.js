import WorkSchedule from "../../models/workschedule.model.js";

const createWorkSchedule = async ({ name, days }) => {
  return WorkSchedule.create({
    name,
    days,
  });
};

const getWorkSchedules = async () => {
  return WorkSchedule.findAll();
};

const getWorkScheduleById = async (id) => {
  return WorkSchedule.findByPk(id);
};

const updateWorkSchedule = async (id, { name, days }) => {
  return WorkSchedule.update({ name, days }, { where: { id } });
};

const removeWorkSchedule = async (id) => {
  return WorkSchedule.destroy({ where: { id } });
};

export {
  createWorkSchedule,
  getWorkSchedules,
  getWorkScheduleById,
  updateWorkSchedule,
  removeWorkSchedule,
};

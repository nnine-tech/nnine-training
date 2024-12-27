import Holiday from "../../models/holiday.model.js";

const createHoliday = async ({ date, name }) => {
  return await Holiday.create({
    date,
    name,
  });
};

const getHolidays = async () => {
  return await Holiday.findAll();
};

const getHolidayById = async (id) => {
  return await Holiday.findByPk(id);
};

const updateHoliday = async (id, { date, name }) => {
  return await Holiday.update({ date, name }, { where: { id: id } });
};

const deleteHoliday = async (id) => {
  return await Holiday.destroy({
    where: { id: id },
  });
};

export {
  createHoliday,
  getHolidays,
  getHolidayById,
  updateHoliday,
  deleteHoliday,
};

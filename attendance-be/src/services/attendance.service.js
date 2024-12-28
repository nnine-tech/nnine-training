import { Op } from "sequelize";
import Attendance from "../../models/attendance.model.js";

const createAttendance = async ({ userId, punchIn }) => {
  return await Attendance.create({
    userId: userId,
    punchIn: punchIn,
    date: new Date().toISOString().slice(0, 10),
  });
};

const getAttendances = async () => {
  return await Attendance.findAll();
};

const getTodayAttendance = async (userId) => {
  const today = new Date().toISOString().slice(0, 10);
  return await Attendance.findOne({
    where: {
      userId,
      date: {
        [Op.eq]: today,
      },
    },
  });
};

const getAttendanceById = async (id) => {
  return await Attendance.findByPk(id);
};

const getAttendanceByUserId = async ({ userId, from, to }) => {
  const currentDate = new Date();
  const defaultFrom = new Date(currentDate);
  defaultFrom.setMonth(currentDate.getMonth() - 1);

  const whereCondition = {
    userId: userId,
    ...(from || to
      ? {
          date: {
            ...(from && { [Op.gte]: new Date(from) }),
            ...(to && { [Op.lte]: new Date(to) }),
          },
        }
      : {
          date: {
            [Op.between]: [defaultFrom, currentDate],
          },
        }),
  };

  return await Attendance.findAll({ where: whereCondition });
};

const updateAttendance = async (id, userId, punchIn, punchOut) => {
  return await Attendance.update(
    {
      userId: userId,
      punchIn: punchIn,
      punchOut: punchOut,
    },
    { where: { id: id } }
  );
};

const validatePunchIn = async (punchIn) => {
  const punchInTime = new Date(punchIn);
  const punchInHour = punchInTime.getHours();
  console.log(punchInHour);
  if (punchInHour < 9) {
    return false;
  }
  return true;
};

const existAttendance = async (userId) => {
  const today = new Date().toISOString().slice(0, 10);
  console.log(today);

  const attendance = await Attendance.findOne({
    where: {
      userId,
      date: {
        [Op.eq]: today, // Match the current date
      },
      punchIn: {
        [Op.ne]: null, // Ensure punchIn is not null
      },
    },
  });
  console.log(attendance);

  return attendance;
};

const deleteAttendance = async (id) => {
  return await Attendance.destroy({ where: { id: id } });
};

export {
  createAttendance,
  getAttendances,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
  getAttendanceByUserId,
  validatePunchIn,
  existAttendance,
  getTodayAttendance,
};

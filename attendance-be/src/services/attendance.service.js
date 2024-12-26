import Attendance from "../../models/attendance.model.js";

const createAttendance = async ({ userId, punchIn }) => {
  return await Attendance.create({
    userId: userId,
    punchIn: punchIn,
    date: new Date(),
  });
};

const getAttendances = async () => {
  return await Attendance.findAll();
};

const getAttendanceById = async (id) => {
  return await Attendance.findByPk(id);
};

const getAttendanceByUserId = async (userId) => {
  return await Attendance.findOne({ where: { userId: userId } });
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
};

import LeaveRequest from "../../models/leaveRequest.model.js";

const createLeaveRequest = async ({ userId, startDate, endDate, reason }) => {
  return await LeaveRequest.create({
    userId,
    startDate,
    endDate,
    reason,
  });
};

const getLeaveRequests = async () => {
  return await LeaveRequest.findAll();
};

const getLeaveRequestById = async (id) => {
  return await LeaveRequest.findByPk(id);
};

const getLeaveRequestByUserId = async (userId) => {
  return await LeaveRequest.findAll({
    where: {
      userId,
    },
  });
};

const updateLeaveRequest = async (id, status) => {
  return await LeaveRequest.update(
    {
      status,
    },
    {
      where: {
        id,
      },
    }
  );
};

const deleteLeaveRequest = async (id) => {
  return await LeaveRequest.destroy({
    where: {
      id,
    },
  });
};

export {
  createLeaveRequest,
  getLeaveRequests,
  getLeaveRequestById,
  getLeaveRequestByUserId,
  updateLeaveRequest,
  deleteLeaveRequest,
};

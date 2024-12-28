import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  createLeaveRequest,
  getLeaveRequests,
  getLeaveRequestById,
  updateLeaveRequest,
  deleteLeaveRequest,
  getLeaveRequestByUserId,
} from "../services/leaveRequest.service.js";

const create = asyncHandler(async (req, res) => {
  const { startDate, endDate, reason } = req.body;
  const userId = req.user.id;
  const leaveRequest = await createLeaveRequest({
    userId,
    startDate,
    endDate,
    reason,
  });
  res
    .status(201)
    .json(new ApiResponse(201, "Leave request created", leaveRequest));
});

const getAll = asyncHandler(async (req, res) => {
  const leaveRequests = await getLeaveRequests();
  res.json(new ApiResponse(200, "Leave requests retrieved", leaveRequests));
});

const getById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const leaveRequest = await getLeaveRequestById(id);
  if (!leaveRequest) {
    throw new ApiError(404, "Leave request not found");
  }
  res.json(new ApiResponse(200, "Leave request retrieved", leaveRequest));
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const leaveRequest = await updateLeaveRequest(id, status);
  if (leaveRequest[0] === 0) {
    throw new ApiError(400, "Leave request not updated");
  }
  res.json(new ApiResponse(200, "Leave request updated"));
});

const getUserLeaveRequests = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const leaveRequests = await getLeaveRequestByUserId(userId);
  res.json(new ApiResponse(200, "Leave requests retrieved", leaveRequests));
});

const getUserLeaveRequestCounts = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const leaveRequests = await getLeaveRequestByUserId(userId);
  const leaveRequestCounts = {
    total: leaveRequests.length,
    approved: leaveRequests.filter((lr) => lr.status === "approved").length,
    rejected: leaveRequests.filter((lr) => lr.status === "rejected").length,
    pending: leaveRequests.filter((lr) => lr.status === "pending").length,
  };
  res.json(
    new ApiResponse(200, "Leave request counts retrieved", leaveRequestCounts)
  );
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const leaveRequest = await deleteLeaveRequest(id);
  if (leaveRequest === 0) {
    throw new ApiError(400, "Leave request not deleted");
  }
  res.json(new ApiResponse(200, "Leave request deleted"));
});

export {
  create,
  getAll,
  getById,
  update,
  remove,
  getUserLeaveRequests,
  getUserLeaveRequestCounts,
};

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  createAttendance,
  getAttendanceByUserId,
} from "../services/attendance.service.js";

const punchIn = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const attendance = await getAttendanceByUserId(userId);
  if (attendance) {
    throw new ApiError(400, "Punch in already exists");
  }
  const punchIn = new Date();
  const newAttendance = await createAttendance({ userId, punchIn });
  res
    .status(201)
    .json(new ApiResponse(201, "Punch in successful", newAttendance));
});

const punchOut = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const attendance = await getAttendanceByUserId(userId);
  if (!attendance) {
    throw new ApiError(400, "Punch in not found");
  }
  attendance.punchOut = new Date();
  await attendance.save();
  res.json(new ApiResponse(200, "Punch out successful"));
});

export { punchIn, punchOut };

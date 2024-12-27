import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  createAttendance,
  existAttendance,
  getAttendanceByUserId,
  getTodayAttendance,
  validatePunchIn,
} from "../services/attendance.service.js";

const punchIn = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const punchIn = new Date();
  const exist = await existAttendance(userId);

  if (exist) {
    throw new ApiError(400, "Already punched In");
  }
  const isValidatedPunchIn = validatePunchIn(punchIn);
  if (!isValidatedPunchIn) {
    throw new ApiError(400, "You can't punch in before 9 AM or after 3 PM");
  }
  const newAttendance = await createAttendance({ userId, punchIn });
  res
    .status(201)
    .json(new ApiResponse(201, "Punch in successful", newAttendance));
});

const punchOut = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const exist = await existAttendance(userId);

  if (!exist) {
    throw new ApiError(400, "Punch in first before punching out");
  } else if (exist.punchOut) {
    throw new ApiError(400, "Punch out already exists");
  }
  const attendance = await getTodayAttendance(userId);
  attendance.punchOut = new Date();
  await attendance.save();
  res.json(new ApiResponse(200, "Punch out successful"));
});

export { punchIn, punchOut };

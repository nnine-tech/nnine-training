import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
  getUserByEmail,
} from "../services/user.service.js";
import {
  getAttendanceByUserId,
  getTodayAttendance,
} from "../services/attendance.service.js";

const create = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    roleId,
    departmentId,
    phone,
    photo,
    workScheduleId,
    panNo,
  } = req.body;
  const userExist = await getUserByEmail(email);
  if (userExist) {
    throw new ApiError(400, "Email already exists");
  }
  const user = await createUser(
    name,
    email,
    password,
    roleId,
    departmentId,
    phone,
    photo,
    workScheduleId,
    panNo
  );
  res.status(201).json(new ApiResponse(201, "User created successfully", user));
});

const getAll = asyncHandler(async (req, res) => {
  const users = await getUsers();
  if (users.length === 0) {
    throw new ApiError(404, "Users not found");
  }
  res.json(new ApiResponse(200, "Users retrieved successfully", users));
});

const getById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  res.json(new ApiResponse(200, "User retrieved successfully", user));
});

const profile = asyncHandler(async (req, res) => {
  const id = req.user.id;
  const user = await getUserById(id);

  res.json(new ApiResponse(200, "User retrieved successfully", user));
});

const getAttendanceByDay = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const attendance = await getTodayAttendance(userId);
  res.json(
    new ApiResponse(200, "Attendance retrieved successfully", attendance)
  );
});

const getAllAttendance = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { from, to } = req.body;
  const attendance = await getAttendanceByUserId({ userId, from, to });
  if (!attendance || attendance.length === 0) {
    throw new ApiError(404, "Attendance not found");
  }
  res.json(
    new ApiResponse(200, "Attendance retrieved successfully", attendance)
  );
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    password,
    roleId,
    departmentId,
    phone,
    photo,
    workScheduleId,
    panNo,
  } = req.body;
  const user = await updateUser(
    id,
    name,
    email,
    password,
    roleId,
    departmentId,
    phone,
    photo,
    workScheduleId,
    panNo
  );
  if (user[0] === 0) {
    throw new ApiError(404, "User not found");
  }
  res.json(new ApiResponse(200, "User updated successfully"));
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await deleteUser(id);
  if (user === 0) {
    throw new ApiError(404, "User not found");
  }
  res.json(new ApiResponse(200, "User deleted successfully"));
});

export {
  create,
  getAll,
  getById,
  remove,
  update,
  profile,
  getAttendanceByDay,
  getAllAttendance,
};

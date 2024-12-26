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

const create = asyncHandler(async (req, res) => {
  const { name, email, password, roleId, departmentId } = req.body;
  const userExist = await getUserByEmail(email);
  if (userExist) {
    throw new ApiError(400, "Email already exists");
  }
  const user = await createUser(name, email, password, roleId, departmentId);
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

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, password, roleId, departmentId } = req.body;
  const user = await updateUser(
    id,
    name,
    email,
    password,
    roleId,
    departmentId
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

export { create, getAll, getById, remove, update };

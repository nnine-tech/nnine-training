import {
  createRole,
  deleteRole,
  getRoles,
  updateRole,
} from "../services/role.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const create = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new ApiError(400, "Name is required");
  }
  const role = await createRole(name);
  res.status(201).json(new ApiResponse(201, "Role created successfully", role));
});

const getAll = asyncHandler(async (req, res) => {
  const roles = await getRoles();
  if (roles.length === 0) {
    throw new ApiError(404, "Roles not found");
  }
  res.json(new ApiResponse(200, "Roles retrieved successfully", roles));
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    throw new ApiError(400, "Name is required");
  }
  const role = await updateRole(id, name);
  if (role[0] === 0) {
    throw new ApiError(404, "Role not found");
  }
  res.json(new ApiResponse(200, "Role updated successfully"));
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const role = await deleteRole(id);
  if (role === 0) {
    throw new ApiError(404, "Role not found");
  }
  res.json(new ApiResponse(200, "Role deleted successfully"));
});

export { create, getAll, update, remove };

import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
} from "../services/department.service.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const create = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new ApiError(400, "Name is required");
  }
  const department = await createDepartment(name);
  res
    .status(201)
    .json(new ApiResponse(201, "Department created successfully", department));
});

const getAll = asyncHandler(async (req, res) => {
  const departments = await getDepartments();
  if (departments.length === 0) {
    throw new ApiError(404, "Departments not found");
  }
  res.json(
    new ApiResponse(200, "Departments retrieved successfully", departments)
  );
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    throw new ApiError(400, "Name is required");
  }
  const department = await updateDepartment(id, name);
  if (department[0] === 0) {
    throw new ApiError(404, "Department not found");
  }
  res.json(new ApiResponse(200, "Department updated successfully"));
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const department = await deleteDepartment(id);
  if (department === 0) {
    throw new ApiError(404, "Department not found");
  }
  res.json(new ApiResponse(200, "Department deleted successfully"));
});

export { create, getAll, update, remove };

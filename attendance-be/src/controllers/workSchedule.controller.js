import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {
  createWorkSchedule,
  removeWorkSchedule,
  getWorkSchedules,
  updateWorkSchedule,
  getWorkScheduleById,
} from "../services/workSchedule.service.js";

const create = asyncHandler(async (req, res) => {
  const workSchedule = await createWorkSchedule(req.body);
  res
    .status(201)
    .json(new ApiResponse(201, "Work Schedule created", workSchedule));
});

const getAll = asyncHandler(async (req, res) => {
  const workSchedules = await getWorkSchedules();
  if (!workSchedules) {
    throw new ApiError(404, "Work Schedules not found");
  }
  res.json(new ApiResponse(200, "Work Schedules", workSchedules));
});

const getOne = asyncHandler(async (req, res) => {
  const workSchedule = await getWorkScheduleById(req.params.id);
  if (!workSchedule) {
    throw new ApiError(404, "Work Schedule not found");
  }
  res.json(new ApiResponse(200, "Work Schedule", workSchedule));
});

const update = asyncHandler(async (req, res) => {
  const workSchedule = await updateWorkSchedule(req.params.id, req.body);
  res.json(new ApiResponse(200, "Work Schedule updated", workSchedule));
});

const remove = asyncHandler(async (req, res) => {
  await removeWorkSchedule(req.params.id);
  res.json(new ApiResponse(200, "Work Schedule deleted"));
});

export { create, getAll, getOne, update, remove };

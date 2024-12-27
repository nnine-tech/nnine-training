import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  createHoliday,
  deleteHoliday,
  getHolidays,
} from "../services/holiday.service.js";

const create = asyncHandler(async (req, res) => {
  const { date, name } = req.body;
  const holiday = await createHoliday({ date, name });
  res.status(201).json(new ApiResponse(201, "Holiday created", holiday));
});

const getAll = asyncHandler(async (req, res) => {
  const holidays = await getHolidays();
  res.json(new ApiResponse(200, "All holidays", holidays));
});

const update = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { date, name } = req.body;
  await updateHoliday(id, { date, name });
  res.json(new ApiResponse(200, "Holiday updated"));
});

const remove = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await deleteHoliday(id);
  res.json(new ApiResponse(200, "Holiday deleted"));
});

export { create, getAll, update, remove };

import Router from "express";
import {
  create,
  getAll,
  remove,
  profile,
  update,
  getAttendanceByDay,
  getAllAttendance,
} from "../controllers/user.controller.js";

import { validateUser } from "../validators/user.validate.js";
import { allowAllRoles } from "../middlewares/authAllRoles.js";

const router = Router();
router.post("/", validateUser, create);
router.get("/", getAll);
router.get("/profile", allowAllRoles, profile);
router.put("/:id", validateUser, update);
router.delete("/:id", remove);
router.get("/attendance/today", allowAllRoles, getAttendanceByDay);
router.get("/attendance", allowAllRoles, getAllAttendance);
export default router;

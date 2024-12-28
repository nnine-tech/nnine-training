import Router from "express";
import {
  create,
  getAll,
  getUserLeaveRequestCounts,
  getUserLeaveRequests,
  remove,
  update,
} from "../controllers/leaveRequest.controller.js";

import { allowManagerOnly } from "../middlewares/authManagerOnly.js";
import { allowAllRoles } from "../middlewares/authAllRoles.js";
import { validateLeaveRequest } from "../validators/leaveRequest.validate.js";

const router = Router();

router.post("/", allowAllRoles, validateLeaveRequest, create);
router.get("/", allowManagerOnly, getAll);
router.get("/my-leave-requests", allowAllRoles, getUserLeaveRequests);
router.get("/status-count", allowAllRoles, getUserLeaveRequestCounts);
router.put("/:id", allowManagerOnly, update);
router.delete("/:id", allowAllRoles, remove);

export default router;

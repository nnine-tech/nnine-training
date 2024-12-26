import Router from "express";
import { punchIn, punchOut } from "../controllers/attendance.controller.js";
import { allowAllRoles } from "../middlewares/authAllRoles.js";
const router = Router();
router.post("/punch-in", allowAllRoles, punchIn);
router.post("/punch-out", allowAllRoles, punchOut);

export default router;

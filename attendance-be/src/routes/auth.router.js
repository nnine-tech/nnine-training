import Router from "express";
import { login, logout } from "../controllers/auth.controller.js";
import { allowAllRoles } from "../middlewares/authAllRoles.js";
const router = Router();
router.post("/login", login);
router.post("/logout", allowAllRoles, logout);

export default router;

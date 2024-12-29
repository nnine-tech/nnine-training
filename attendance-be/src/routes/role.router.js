import Router from "express";

import {
  create,
  getAll,
  remove,
  update,
} from "../controllers/role.controller.js";

import { validateRole } from "../validators/role.validate.js";

const router = Router();
router.post("/", validateRole, create);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;

import Router from "express";
import {
  create,
  getAll,
  remove,
  update,
} from "../controllers/user.controller.js";

import { validateUser } from "../validators/user.validate.js";

const router = Router();
router.post("/", validateUser, create);
router.get("/", getAll);
router.put("/:id", validateUser, update);
router.delete("/:id", remove);

export default router;

import Router from "express";
import {
  create,
  getAll,
  remove,
  update,
} from "../controllers/workSchedule.controller.js";

const router = Router();

router.post("/", create);
router.get("/", getAll);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;

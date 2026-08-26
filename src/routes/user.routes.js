import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router();
const userController = new UserController();

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.delete("/:id", userController.delete);

export default router;

import { Router } from "express";
import { createUser, findAll, updateUser, deleteUser } from "../controllers/user.js";

const router = Router();

router.get("/", findAll);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
import { Router } from "express";
import {
  createUser,
  findAll,
  updateUser,
  deleteUser,
  addProductsToUser
} from "../controllers/user.js";

const router = Router();

router.get("/", findAll);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/:userId/product/:productId", addProductsToUser)

export default router;

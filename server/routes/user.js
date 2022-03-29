import { Router } from "express";
import passport from 'passport'

import {
  createUser,
  findAll,
  updateUser,
  deleteUser,
  addProductsToUser,
  loginUser,
  findUser
} from "../controllers/user.js";

const router = Router();

router.get("/", passport.authenticate('jwt', {session:false}), findAll);
router.get("/:id", findUser);
router.post("/", createUser);
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/:userId/product/:productId", addProductsToUser);

export default router;

import { Router } from "express";
import passport from 'passport'

import { checkIsInRole } from "../util/secrets.js"
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
router.get("/:id", passport.authenticate('jwt', {session:false}), findUser);
router.post("/", createUser);
router.post("/login", loginUser);
router.put("/:id", passport.authenticate('jwt', {session:false}), updateUser);
router.delete("/:id", passport.authenticate('jwt', {session:false}), checkIsInRole("admin"), deleteUser);
router.patch("/:userId/product/:productId", addProductsToUser);

export default router;

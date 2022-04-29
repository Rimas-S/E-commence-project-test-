import { Router } from "express";
import { createOrder } from "../controllers/order.js";
import passport from 'passport'

const router = Router();

router.post("/", passport.authenticate('jwt', {session:false}), createOrder);

export default router;
import { Router } from "express";
import { createOrder, findUserOrders, findAllOrders } from "../controllers/order.js";
import { checkIsInRole } from "../util/secrets.js"
import passport from "passport";

const router = Router();

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  findUserOrders
);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkIsInRole("admin"),
  findAllOrders
);
router.post("/", passport.authenticate("jwt", { session: false }), createOrder);

export default router;

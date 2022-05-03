import { Router } from "express";
import passport from 'passport'
import { checkIsInRole } from "../util/secrets.js"
import {
  createProduct,
  findAll,
  findAllWithoutImages,
  findArrayOfProducts,
  findProduct,
  updateProduct,
  deleteProduct,
  addRateToUser
} from "../controllers/product.js";

const router = Router();

router.get("/", findAll);
router.get("/withoutimages", findAllWithoutImages);
router.get("/:id", findProduct);
router.patch("/productbyids", findArrayOfProducts);
router.post("/", passport.authenticate('jwt', {session:false}), checkIsInRole("admin"), createProduct);
router.put("/:id", passport.authenticate('jwt', {session:false}), checkIsInRole("admin"), updateProduct);
router.delete("/:id", passport.authenticate('jwt', {session:false}), checkIsInRole("admin"), deleteProduct);
router.patch("/rate/:productId", addRateToUser);

export default router;

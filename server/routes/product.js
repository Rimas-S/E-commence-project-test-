import { Router } from "express";
import {
  createProduct,
  findAll,
  findProduct,
  updateProduct,
  deleteProduct,
  addRateToUser
} from "../controllers/product.js";

const router = Router();

router.get("/", findAll);
router.get("/:id", findProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.patch("/rate/:productId", addRateToUser);

export default router;

import { Router } from "express";
import {
  createProduct,
  findAll,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = Router();

router.get("/", findAll);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

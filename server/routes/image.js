import { Router } from "express";
import { createImage, findAll } from "../controllers/image.js";

const router = Router();

router.get("/", findAll);
router.post("/", createImage);

export default router;

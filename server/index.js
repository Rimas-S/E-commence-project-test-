import express from "express";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";

import "dotenv/config";

const app = express();
app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

export default app;

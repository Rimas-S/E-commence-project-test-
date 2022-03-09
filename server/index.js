import express from "express";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import imageRouter from "./routes/image.js";
import cors from "cors";

import "dotenv/config";

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
  }

  app.use(cors(corsOptions))


app.use(express.json({limit: '50mb'}));
app.use("/api/v1/image", imageRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);


export default app;

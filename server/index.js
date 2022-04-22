import express from "express";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import imageRouter from "./routes/image.js";
import orderRouter from "./routes/order.js";
import cors from "cors";
import passport from 'passport'
import {passportStrategy} from './config/passport.js'


const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));

passport.use(passportStrategy)

app.use("/api/v1/image", imageRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", orderRouter);


export default app;

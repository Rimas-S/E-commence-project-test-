import mongoose from "mongoose";
import app from './index.js'

import "dotenv/config";

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Application is running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Please check MongoDB connection!" + err);
  });



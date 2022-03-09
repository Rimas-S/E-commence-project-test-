import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  src: [String]
});

export default mongoose.model("Image", imageSchema);
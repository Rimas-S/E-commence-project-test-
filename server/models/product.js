import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  price: Number,
  size: [String],
});

export default mongoose.model("Product", productSchema);

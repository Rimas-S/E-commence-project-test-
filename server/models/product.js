import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  price: Number,
  size: String,
  color: String,
  image: [String],
  quantity: {type: Number, default: 0}
});

export default mongoose.model("Product", productSchema);

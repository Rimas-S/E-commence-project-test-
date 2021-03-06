import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: Number,
  size: String,
  color: String,
  describtion: String,
  image: [String],
  quantity: { type: Number, default: 0 },
  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      rate: Number,
      comment: String,
    },
  ],
});

export default mongoose.model("Product", productSchema);

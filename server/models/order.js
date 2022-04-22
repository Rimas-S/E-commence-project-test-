import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number,
    },
  ],
  subTotal: Number,
  vat: Number,
  shipping: { type: Number, default: 0 },
  freeShipping: { type: Number, default: 0 },
  totalAmound: Number,
});

export default mongoose.model("Order", orderSchema);

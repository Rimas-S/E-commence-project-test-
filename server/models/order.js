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
  shippingAddress: {
    firstName: String,
    lastName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    region: String,
    postalCode: String,
    country: String
  },
  subTotal: Number,
  vat: Number,
  shipping: { type: Number, default: 0 },
  freeShipping: { type: Number, default: 0 },
  totalAmound: Number,
  created_at: {type: Date, default: Date.now},
});

export default mongoose.model("Order", orderSchema);

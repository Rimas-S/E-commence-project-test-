import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  password: String,
  address: String,
  country: String,
  city: String,
  phone: Number,
  role: { type: String, default: 'user' },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: "Product"
    }
  ]
});

export default mongoose.model("User", userSchema);
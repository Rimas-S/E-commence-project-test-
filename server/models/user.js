import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  password: String,
  address: String,
  role: { type: String, default: 'user' },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: "Product"
    }
  ]
});

export default mongoose.model("User", userSchema);
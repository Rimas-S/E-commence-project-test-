import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: {type: String, unique: true},
  product: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: "Product"
    }
  ]
});

export default mongoose.model("User", userSchema);
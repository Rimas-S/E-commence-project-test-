import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: {type: String, unique: true}
});

export default mongoose.model("User", userSchema);
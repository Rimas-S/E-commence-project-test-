import User from "../models/user.js";

const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

const findUserById = async (userId) => {
  const user = await User.findById(userId).select('-password');
  return user;
};

const create = async (user) => {
  return user.save();
};

const findAllData = async () => {
  return User.find().populate("product").select('-password');
};

const deleteUser = async (_id) => {
  return User.findByIdAndRemove(_id);
};

const updateUser = async (_id, user) => {
  return User.findByIdAndUpdate(_id, user, { new: true }).select('-password');
};

const addProductsToUser = async (userId, productId) => {
  const user = await User.findById(userId);

  user.product.push(productId);
  return user.save();
};

export default {
  create,
  findAllData,
  findUserById,
  deleteUser,
  updateUser,
  addProductsToUser,
  findUserByEmail,
};

import User from "../models/user.js";

const create = async (user) => {
  return user.save();
};

const findAllData = async () => {
  return User.find();
};

const deleteUser = async (_id) => {
  return User.findByIdAndRemove(_id);
};

const updateUser = async (_id, user) => {
  return User.findByIdAndUpdate(_id, user, { new: true });
}

// const updateProduct = async () => {
//   return User.findByIdAndUpdate();
// };

export default { create, findAllData, deleteUser, updateUser };

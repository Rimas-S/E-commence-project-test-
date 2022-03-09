import User from "../models/user.js";
import UserService from "../services/user.js";

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, age, email, password, address } = req.body;

    const isUserNameExist = await UserService.findUserByEmail(email);
if(isUserNameExist)
return res.status(400).json({error: 'Username already exists'})

    const newUser = new User({
      firstName,
      lastName,
      age,
      email,
      password,
      address,
    });
    const user = await UserService.create(newUser);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

export const findAll = async (req, res) => {
  try {
    res.json(await UserService.findAllData());
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id: _id } = req.params;

    res.json(await UserService.deleteUser(_id));
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const user = req.body;

    res.json(await UserService.updateUser(_id, user, { new: true }));
  } catch (err) {
    console.log(err);
  }
};

export const addProductsToUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    console.log(userId, productId);
    res.json(await UserService.addProductsToUser(userId, productId));
  } catch (err) {
    console.log(err);
  }
};

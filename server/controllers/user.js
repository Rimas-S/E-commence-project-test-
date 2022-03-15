import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";
import UserService from "../services/user.js";
import { JWT_SECRET } from "../util/secrets.js";

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, age, email, password, address } = req.body;

    const isUserNameExist = await UserService.findUserByEmail(email);
    if (isUserNameExist)
      return res.json({ error: "User email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      age,
      email,
      password: hasedPassword,
      address,
    });
    const user = await UserService.create(newUser);
    const response = {success: "Account created successfully", email: user.email}
    res.json(response);
  } catch (err) {
    res.json({error: err.message});    
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

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.findUserByEmail(email);
    if (user) {
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        return res.json("Password is not correct");
      }
      const token = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        JWT_SECRET, {expiresIn: '1h' }
      );

      res.json({ token, userId: user._id, role: user.role });
    } else {
      res.json("User does not exsist, please register!");
    }
  } catch (err) {
    res.json("Server error: " + err);
    console.log(err);
  }
};

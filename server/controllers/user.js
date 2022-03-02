import User from "../models/user.js";
import UserService from "../services/user.js";

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, age, email } = req.body;

    const user = new User({
      firstName,
      lastName,
      age,
      email,
    });
    await UserService.create(user);
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

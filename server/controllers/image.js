import Image from "../models/image.js";
import ImageService from "../services/image.js";

export const createImage = async (req, res) => {
  try {
    const { src } = req.body;

    const image = new Image({
      src
    });
    await ImageService.create(image);
    res.json(image);
  } catch (err) {
    console.log(err);
  }
};

export const findAll = async (req, res) => {
  try {
    res.json(await ImageService.findAllData());
  } catch (err) {
    console.log(err);
  }
};

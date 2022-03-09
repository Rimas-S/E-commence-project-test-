import Image from "../models/image.js";

const create = async (image) => {
  return image.save();
};

const findAllData = async () => {
  return Image.find();
};

export default { create, findAllData }
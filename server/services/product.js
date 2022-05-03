import Product from "../models/product.js";

const findProductByName = async (name) => {
  const product = await Product.findOne({ name });
  return product;
};

const findProductById = async (id) => {
  const product = await Product.findById(id).populate(
    "ratings.user",
    "-password"
  );
  return product;
};

const create = async (product) => {
  return product.save();
};

const findAll = async () => {
  return Product.find();
};

const findAllWithoutImages = async () => {
  return Product.find().select('-image');
};

const findArrayOfIds = async (arr) => {
  return Product.find({ _id: { $in: arr } });
};

const deleteProduct = async (_id) => {
  return Product.findByIdAndRemove(_id);
};

const updateProduct = async (_id, product) => {
  return Product.findByIdAndUpdate(_id, product, { new: true });
};

const addRateToUser = async (productId, rate) => {
  const product = await Product.findById(productId);

  product.ratings.push(rate);
  return product.save();
};

export default {
  create,
  findAll,
  findAllWithoutImages,
  findArrayOfIds,
  updateProduct,
  deleteProduct,
  findProductByName,
  findProductById,
  addRateToUser,
};

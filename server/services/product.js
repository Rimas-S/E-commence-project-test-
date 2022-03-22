import Product from "../models/product.js";


const findProductByName = async (name) => {
  const product = await Product.findOne({ name });
  return product;
};

const findProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const create = async (product) => {
  return product.save();
};

const findAllData = async () => {
  return Product.find();
};

const deleteProduct = async (_id) => {
  return Product.findByIdAndRemove(_id);
};

const updateProduct = async (_id, product) => {
  return Product.findByIdAndUpdate(_id, product, { new: true });
};


export default {
  create,
  findAllData,
  updateProduct,
  deleteProduct,
  findProductByName,
  findProductById,
};

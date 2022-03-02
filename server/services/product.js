import Product from "../models/product.js";

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

export default { create, findAllData, updateProduct, deleteProduct };

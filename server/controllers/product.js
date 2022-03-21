import product from "../models/product.js";
import Product from "../models/product.js";
import ProductService from "../services/product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, size, color, describtion, image, quantity } = req.body;

    const product = new Product({
      name,
      price,
      size,
      color,
      describtion,
      image,
      quantity,
    });

    const isProductExist = await ProductService.findUserByName(name);
    if (isProductExist)
      return res.json({ error: `${name} exist in the database!` });

    await ProductService.create(product);
    res.json({ success: "Successfully saved.", productId: product._id });
  } catch (err) {
    console.log(err);
    res.json({
      error: err.message,
    });
  }
};

export const findAll = async (req, res) => {
  try {
    res.json(await ProductService.findAllData());
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id: _id } = req.params;

    res.json(await ProductService.deleteProduct(_id));
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const product = req.body;

    res.json(await ProductService.updateProduct(_id, product, { new: true }));
  } catch (err) {
    console.log(err);
  }
};

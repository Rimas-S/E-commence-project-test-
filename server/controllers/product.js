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

    const isProductExist = await ProductService.findProductByName(name);
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

export const findProduct = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const product = await ProductService.findProductById(_id)
    res.json(product);
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
    res.json(err);
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
    const newProduct = await ProductService.updateProduct(_id, product, { new: true })
    res.json({ success: "Successfully saved.", productId: newProduct._id });
  } catch (err) {
    res.json({
      error: err.message,
    }); 
    console.log(err);
  }
};

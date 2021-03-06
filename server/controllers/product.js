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
    const product = await ProductService.findProductById(_id);
    if (product) {
      res.json(product);
    } else {
      res.json({
        error: "Product does not exist!",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: err.message,
    });
  }
};

export const findAll = async (req, res) => {
  try {
    const products = await ProductService.findAll();
    res.json(products);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

export const findAllWithoutImages = async (req, res) => {
  try {
    const products = await ProductService.findAllWithoutImages();
    res.json(products);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

export const findArrayOfProducts = async (req, res) => {
  try {
    const { productsIdsArray } = req.body;
    const products = await ProductService.findArrayOfIds(productsIdsArray);
    res.json(products);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const product = await ProductService.deleteProduct(_id);

    if (product) {
      res.json(product);
    } else {
      res.json({ error: "Id does not exist" });
    }
  } catch (err) {
    res.json({ error: err.message });
    console.log(err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const product = req.body;
    const newProduct = await ProductService.updateProduct(_id, product, {
      new: true,
    });
    res.json({ success: "Successfully saved.", productId: newProduct._id });
  } catch (err) {
    res.json({
      error: err.message,
    });
    console.log(err);
  }
};

export const addRateToUser = async (req, res) => {
  try {
    const productId = req.params.productId;
    const vote = req.body;

    console.log(productId, vote);

    const user = await ProductService.addRateToUser(productId, vote);

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

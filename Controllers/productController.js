const Product = require("../Models/product");
const addProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    const product = new Product({ name, price, quantity });
    await product.save();
    return res
      .status(201)
      .json({ message: "Product added successfully!", product });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res
      .status(201)
      .json({ message: "Products fetched successfully!", products });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

const getProductbyId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    return res
      .status(200)
      .json({ message: "Product fetched successfully!", product });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

const getProductsByName = async (req, res) => {
  try {
    const { name } = req.body;
    const products = await Product.find({ name: new RegExp(name, "i") });
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found!" });
    }
    return res
      .status(200)
      .json({ message: "Products fetched successfully!", products });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const { name, price, quantity } = req.body;
    const product = await Product.findByIdAndUpdate(
      productID,
      { name, price, quantity },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    return res
      .status(200)
      .json({ message: "Product updated successfully!", product });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const product = await Product.findByIdAndDelete(productID);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    return res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductbyId,
  getProductsByName,
  updateProduct,
  deleteProduct,
};

const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProductbyId,
  getProductsByName,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productController");

const router = express.Router();

router.post("/add", addProduct);
router.get("/getall", getAllProducts);
router.get("/get/:id", getProductbyId);
router.get("/search", getProductsByName);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;

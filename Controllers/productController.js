const Product = require('../Models/product');
const addProduct = async (req, res)=>{
    try {
        const {name, price, quantity} = req.body;

        const product = new Product({name, price, quantity});
        await product.save();
        return res.status(201).json({message:"Product added successfully!", product});

        
    } catch (err) {
        return res.status(500).json({message:"Server Error",error: err.message});
    }
}

const getAllProducts = async (req,res) =>{
    try {
        const products = await Product.find();
        return res.status(201).json({message:"Products fetched successfully!", products});
    } catch (err) {
        return res.status(500).json({message:"Server error", error: err.message});
    }
}
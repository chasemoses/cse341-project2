const Product = require('../models/product');

const getProducts = async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch(err) {
        res.status(500).json({message: err.message});
    }

}

const createProducts = async (req, res) => {
    const product = new Product ({

        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        type: req.body.type,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price,
    })

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch(err) {
        res.status(400).json({message: err.message});

    }

}


module.exports = {
    getProducts,
    createProducts
}
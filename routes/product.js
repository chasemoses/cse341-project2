const router = require('express').Router();


// Require Controller
const products = require('../controllers/products');

// GET Products
router.get('/products', products.getProducts);


// // GET Product
// router.get('/products/:id', products.getProduct);


// POST Product (This should be restricted as we don't want customers creating products.)
router.post('/products', products.createProducts);

// // Delete Product
// router.delete('products:id', products.deleteProduct);

// // Update Product (Probably restrict this to authorized users.)
// router.put('/products/:id', products.updateProduct);





module.exports = router;
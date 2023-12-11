const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts, getSingleProduct, searchProduct} = require('../controllers/Product');

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.get('/search/:key', searchProduct);
router.post('/', createProduct);

module.exports = router;
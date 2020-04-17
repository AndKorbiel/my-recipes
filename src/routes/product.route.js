const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/getAll', product_controller.product_getAll);
router.post('/add', product_controller.product_add);

module.exports = router;
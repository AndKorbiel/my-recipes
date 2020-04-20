const express = require('express');
const router = express.Router();

const recipe_controller = require('../controllers/recipe.controller');

router.get('/getAll', recipe_controller.recipe_getAll);
router.post('/add', recipe_controller.product_add);

module.exports = router;
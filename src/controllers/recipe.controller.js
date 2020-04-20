const Recipe = require('../models/recipe.model');

exports.recipe_getAll = function (req, res) {
    Recipe.find((err, recipe) =>{
        if(err){
            console.log(err);
        }
        else {
            res.json(recipe);
        }
    });
};

exports.product_add = function (req, res) {
    let recipe = new Recipe(
        {
            title: req.body.title,
            ingredients: req.body.ingredients
        }
    );

    recipe.save(function (err) {
        if (err) {
            return res.json({status: 500, error: err});
        }
        res.send({status: 200, message: 'Recipe added successfully', details: recipe})
    })
};
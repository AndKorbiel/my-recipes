const Product = require('../models/product.model');

exports.product_getAll = function (req, res) {
    Product.find((err, product) =>{
        if(err){
            console.log(err);
        }
        else {
            res.json(product);
        }
    });
};

exports.product_add = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};
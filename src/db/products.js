const Joi = require('joi');
const mongoose = require("mongoose");
const db = require('./connection');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
},{
    timestamps: true
});

const Product = mongoose.model("User", productSchema);
module.exports = Product;


// const schema = Joi.object().keys({
//     name: Joi.string().required(),
// });

// const Products = db.get('products');



function getAll() {
    return products.find()
}

function create(product) {
    const result = Joi.validate(product, schema);
    if (result.error == null) {
        product.created = new Date();
        return products.insert(product);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};
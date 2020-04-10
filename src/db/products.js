const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    name: Joi.string().alphanum().required(),
});

const products = db.get('products');

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
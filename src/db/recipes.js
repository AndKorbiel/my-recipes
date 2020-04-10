const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    title: Joi.string().required(),
    ingredients: Joi.array().required()
});

const recipes = db.get('recipes');

function getAll() {
    return recipes.find()
}

function create(recipe) {
    const result = Joi.validate(recipe, schema);
    if (result.error == null) {
        recipe.created = new Date();
        return recipes.insert(recipe);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};
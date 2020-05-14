// import Vue from 'vue';

export const constans = {
    SET_PRODUCTS: "SET_PRODUCTS",
    SET_RECIPES: "SET_RECIPES",
    ADD_PRODUCT: "ADD_PRODUCT",
    ADD_PRODUCT_ERROR: "ADD_PRODUCT_ERROR",
    ADD_RECIPE: "ADD_RECIPE",
    ADD_RECIPE_ERROR: "ADD_RECIPE_ERROR",
    ADD_SELECTED_PRODUCT: "ADD_SELECTED_PRODUCT",
    REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
    ADD_RECIPE_TO_AVAILABLE: "ADD_RECIPE_TO_AVAILABLE",
    REMOVE_RECIPE_FROM_AVAILABLE: "REMOVE_RECIPE_FROM_AVAILABLE",
};

export const mutations = {
    [constans.SET_PRODUCTS](state, products) {
        state.products = products
    },
    [constans.SET_RECIPES](state, recipes) {
        state.recipes = recipes
    },
    [constans.ADD_PRODUCT](state, product) {
        state.products = [...state.products, product.details];
        state.errors.products = "";
        state.messages.products = `New product: ${product.details.name} has been added`;
    },
    [constans.ADD_PRODUCT_ERROR](state, result) {
        state.errors.products = result.error.message;
        state.messages.products = ''
    },
    [constans.ADD_RECIPE](state, recipe) {
        state.recipes = [...state.recipes, recipe.details];
        state.errors.recipes = "";
        state.messages.recipes = `New recipe: ${recipe.details.title} has been added`;
    },
    [constans.ADD_RECIPE_ERROR](state, result) {
        state.errors.recipes = result.error.message;
        state.messages.recipes = ''
    },
    [constans.ADD_SELECTED_PRODUCT](state, product) {
        state.selectedProducts = [...state.selectedProducts, product];
    },
    [constans.REMOVE_SELECTED_PRODUCT](state, product) {
        state.selectedProducts = state.selectedProducts.filter(
            el => el !== product
        )
    },
    [constans.ADD_RECIPE_TO_AVAILABLE](state, recipe) {
        state.availableRecipes = [...state.availableRecipes, recipe];
    },
    [constans.REMOVE_RECIPE_FROM_AVAILABLE](state, recipe) {
        state.availableRecipes = state.availableRecipes.filter(
            el => el !== recipe
        )
    },
};
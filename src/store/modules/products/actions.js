import { constans } from "./mutations";
// import router from "./../../../router";

const PRODUCTS_API_URL = "http://localhost:4000/products/";
const RECIPES_API_URL = "http://localhost:4000/recipes/";

export const getProducts = async (context) => {
    let products = [];
    await fetch(PRODUCTS_API_URL + 'getAll')
        .then(response => response.json())
        .then(result => {
            products = result;
        });
    context.commit(constans.SET_PRODUCTS, products)
};

export const getRecipes = async (context) => {
    let recipes = [];
    await fetch(RECIPES_API_URL + 'getAll')
        .then(response => response.json())
        .then(result => {
            recipes = result;
        });
    context.commit(constans.SET_RECIPES, recipes)
};

export const createProduct = (context, payload) => {
    fetch(PRODUCTS_API_URL + 'add', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            if (result.status !== 200) {
                context.commit(constans.ADD_PRODUCT_ERROR, result)
            } else {
                context.commit(constans.ADD_PRODUCT, result)
            }
        })
};

export const createRecipe = (context, payload) => {
    fetch(RECIPES_API_URL + 'add', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            if (result.status !== 200) {
                context.commit(constans.ADD_RECIPE_ERROR, result)
            } else {
                context.commit(constans.ADD_RECIPE, result)
            }
        })
};

export const addProductToSelected = (context, payload) => {
    if (context.state.selectedProducts.includes(payload)) {
        context.commit(constans.REMOVE_SELECTED_PRODUCT, payload)
    } else {
        context.commit(constans.ADD_SELECTED_PRODUCT, payload)
    }
    context.dispatch('checkMatch');
};

export const checkMatch = (context) => {
    context.state.recipes.forEach((el) => {
        const ingredientsAmmount = el.ingredients.length;
        let matches = 0;

        if (el.ingredients.length > context.state.selectedProducts.length) {
            if (context.state.availableRecipes.includes(el)) {
                context.commit(constans.REMOVE_RECIPE_FROM_AVAILABLE, el)
            }
            return false
        } else {
            el.ingredients.forEach((element) => {
                if (context.state.selectedProducts.length > 0 && element) {
                    context.state.selectedProducts.forEach((selected) => {
                        if (selected.toLowerCase() === element.toLowerCase()) {
                            matches++;
                        }
                    })
                }
            })
        }

        if (matches === ingredientsAmmount) {
            if (!context.state.availableRecipes.includes(el)) {
                context.commit(constans.ADD_RECIPE_TO_AVAILABLE, el)
            }
        } else if (context.state.availableRecipes.includes(el)) {
            context.commit(constans.REMOVE_RECIPE_FROM_AVAILABLE, el)
        }
    })
};
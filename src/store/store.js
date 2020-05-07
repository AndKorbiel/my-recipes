import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const PRODUCTS_API_URL = "http://localhost:4000/products/";
const RECIPES_API_URL = "http://localhost:4000/recipes/";

export default new Vuex.Store({
    state : {
        selectedProducts: [],
        availableRecipes: [],
        errors: {
            products: '',
            recipes: ''
        },
        messages: {
            products: '',
            recipes: ''
        },
        products: [],
        recipes: [],
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        },
        setRecipes(state, recipes) {
            state.recipes = recipes
        },
        addProduct(state, product) {
            state.products = [...state.products, product.details];
            state.errors.products = "";
            state.messages.products = `New product: ${product.details.name} has been added`;
        },
        addProductError(state, result) {
            state.errors.products = result.error.message;
            state.messages.products = ''
        },
        addRecipe(state, recipe) {
            state.recipes = [...state.recipes, recipe.details];
            state.errors.recipes = "";
            state.messages.recipes = `New recipe: ${recipe.details.title} has been added`;
        },
        addRecipeError(state, result) {
            state.errors.recipes = result.error.message;
            state.messages.recipes = ''
        },
        addSelectedProduct(state, product) {
            state.selectedProducts = [...state.selectedProducts, product];
        },
        removeSelectedProduct(state, product) {
            state.selectedProducts = state.selectedProducts.filter(
                el => el !== product
            )
        },
        addRecipeToAvailable(state, recipe) {
            state.availableRecipes = [...state.availableRecipes, recipe];
        },
        removeRecipeFromAvailable(state, recipe) {
            state.availableRecipes = state.availableRecipes.filter(
                el => el !== recipe
            )
        },
    },
    actions : {
        async getProducts(context) {
            let products = [];
            await fetch(PRODUCTS_API_URL + 'getAll')
                .then(response => response.json())
                .then(result => {
                    products = result;
                });
            context.commit('setProducts', products)
        },
        async getRecipes(context) {
            let recipes = [];
            await fetch(RECIPES_API_URL + 'getAll')
                .then(response => response.json())
                .then(result => {
                    recipes = result;
                });
            context.commit('setRecipes', recipes)
        },
        createProduct(context, payload) {
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
                        context.commit('addProductError', result)
                    } else {
                        context.commit('addProduct', result)
                    }
                })
        },
        createRecipe(context, payload) {
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
                        context.commit('addRecipeError', result)
                    } else {
                        context.commit('addRecipe', result)
                    }
                })
        },
        selectProduct(context, payload) {
            if (this.state.selectedProducts.includes(payload)) {
                context.commit('removeSelectedProduct', payload)
            } else {
                context.commit('addSelectedProduct', payload)
            }
            context.dispatch('checkMatch');
        },
        checkMatch(context) {
            this.state.recipes.forEach((el)=> {
                const ingredientsAmmount = el.ingredients.length;
                let matches = 0;

                if (el.ingredients.length > this.state.selectedProducts.length) {
                    if (this.state.availableRecipes.includes(el)) {
                        context.commit('removeRecipeFromAvailable', el)
                    }
                    return false
                } else {
                    el.ingredients.forEach((element)=>{
                        if (this.state.selectedProducts.length > 0 && element) {
                            this.state.selectedProducts.forEach((selected) => {
                                if (selected.toLowerCase() === element.toLowerCase()) {
                                    matches++;
                                }
                            })
                        }
                    })
                }

                if (matches === ingredientsAmmount) {
                    if (!this.state.availableRecipes.includes(el)) {
                        context.commit('addRecipeToAvailable', el)
                    }
                } else if (this.state.availableRecipes.includes(el)) {
                    context.commit('removeRecipeFromAvailable', el)
                }
            })
        },
    }
});

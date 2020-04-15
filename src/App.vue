<template lang="pug">
    #app
        .container-fluid
            .row
                .col-sm-12.col-md-3
                    ProductsList(:products="products" :selectProduct="selectProduct")
                    SubmitForm(
                        :error="errors.products"
                        mode="Product"
                        :element="product"
                        :method="addProduct"
                        :message="messages.products"
                        headingText="Add new product"
                        placeholder="Product name")
                .col-sm-12.col-md-6
                    RecipeList(:recipes="recipes" headingText="Recipes list" className="recipes-list all-recipes")
                .col-sm-12.col-md-3
                    RecipeList(:recipes="availableRecipes" headingText="Recipes that match your products" className="recipes-list")
                    SubmitForm(
                        :errors="errors.recipes"
                        :element="recipe"
                        :method="addRecipe"
                        :message="messages.recipes"
                        headingText="Add new recipe"
                        placeholder="Recipe title")
</template>

<script>
    import RecipeList from "./components/RecipesList";
    import ProductsList from "./components/ProductsList";
    import SubmitForm from "./components/SubmitForm";

    const PRODUCTS_API_URL = "http://localhost:4000/products";
    const RECIPES_API_URL = "http://localhost:4000/recipes";

    export default {
        name: "App",
        components: {
            RecipeList,
            ProductsList,
            SubmitForm
        },
        data: function () {
            return {
                // products: ["cabbage", "potatoes", "carrot", "chicken", "beef", "cod", "apples", "wine", "leek", "onion", "mushrooms", "peach", "plums"],
                selectedProducts: [],
                // recipes: [
                //     {id: 1, title: "Chicken with cabbage and potatoes", ingredients: ["chicken", "cabbage", "potatoes"]},
                //     {id: 2, title: "Carrot with cabbage", ingredients: ["carrot", "cabbage"]},
                //     {id: 3, title: "Cabbage with potatoes", ingredients: ["cabbage", "potatoes"]},
                //     {id: 4, title: "Chicken with potatoes, carrot and cabbage", ingredients: ["chicken", "potatoes", "carrot", "cabbage"]},
                //     {id: 5, title: "Beef in wine with cabbage", ingredients: ["beef", "cabbage", "wine"]},
                //     {id: 6, title: "Chicken with mushrooms and onion", ingredients: ["chicken", "mushrooms", "onion"]},
                //     {id: 7, title: "Apples in wine with carrot", ingredients: ["apples", "carrot", "wine"]},
                //     {id: 8, title: "Chicken with potatoes, carrot, leek and peach", ingredients: ["potatoes", "leek", "peach", "carrot", "chicken"]},
                //     ],
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
                product: {
                    name: ''
                },
                recipes: [],
                recipe: {
                    title: '',
                    ingredients: []
                }
            };
        },
        mounted() {
            fetch(PRODUCTS_API_URL)
                .then(response => response.json())
                .then(result => {
                    this.products = result;
                });
            fetch(RECIPES_API_URL)
                .then(response => response.json())
                .then(result => {
                    this.recipes = result;
                });
        },
        methods: {
            selectProduct(product) {
                if (this.selectedProducts.includes(product)) {
                    this.selectedProducts = this.selectedProducts.filter(
                        el => el !== product
                    );
                } else {
                    this.selectedProducts.push(product);
                }
                this.checkMatch();
            },
            checkMatch() {
                this.recipes.forEach((el)=> {
                    const ingredientsAmmount = el.ingredients.length;
                    let matches = 0;

                    if (el.ingredients.length > this.selectedProducts.length) {
                        if (this.availableRecipes.includes(el)) {
                            this.availableRecipes = this.availableRecipes.filter(elem => elem !== el)
                        }
                        return false
                    } else {
                        el.ingredients.forEach((element)=>{
                            this.selectedProducts.forEach((product) => {
                                if (product.toLowerCase() === element.toLowerCase()) {
                                    matches++;
                                }
                            })
                        })
                    }

                    if (matches === ingredientsAmmount) {
                        if (!this.availableRecipes.includes(el)) {
                            this.availableRecipes.push(el)
                        }
                    } else if (this.availableRecipes.includes(el)) {
                        this.availableRecipes = this.availableRecipes.filter(elem => elem !== el)
                    }
                })
            },
            addProduct() {
                fetch(PRODUCTS_API_URL, {
                    method: "POST",
                    body: JSON.stringify(this.product),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(result => {
                    if (result.details) {
                        const error = result.details
                            .map(detail => detail.message)
                            .join(". ");
                        this.errors.products = error;
                        this.messages.products = ''
                    } else {
                        this.errors.products = "";
                        this.messages.products = `New product: ${this.product.name} has been added`;
                        this.product.name = "";
                        this.products.push(result)
                    }
                })
            },
            addRecipe() {
                let formattedRecipe = this.formatRecipe(this.recipe)

                fetch(RECIPES_API_URL, {
                    method: "POST",
                    body: JSON.stringify(formattedRecipe),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.details) {
                            const error = result.details
                                .map(detail => detail.message)
                                .join(". ");
                            this.errors.recipes = error;
                            this.messages.recipes = ''
                        } else {
                            this.errors.recipes = "";
                            this.messages.recipes = `New recipe: ${this.recipe.title} has been added`;
                            this.recipe.title = "";
                            this.recipe.ingredients = [];
                            this.recipes.push(result)
                        }
                    })
            },
            formatRecipe(myRecipe) {
                let recipeFormatted = myRecipe;
                recipeFormatted.ingredients = recipeFormatted.ingredients.split(",")
                    .map(el => {
                    return el.trim().replace(/ +(?= )/g,'');
                })
                    .filter(el => el.length > 0);

                return recipeFormatted
            }
        }
    };
</script>
<style lang="scss">
    @import "./sass/main.scss";

    body {
        background: url('./assets/bg.jpg');
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

        h2, .h2 {
            font-size: 25px;
        }
    }
</style>
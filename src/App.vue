<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-3">
                    <ProductsList :products="products" :selectProduct="selectProduct"/>
                </div>
                <div class="col-sm-12 col-md-6">
                    <RecipeList :recipes="recipes" headingText="Recipes list" className="recipes-list all-recipes" />
                </div>
                <div class="col-sm-12 col-md-3">
                    <RecipeList :recipes="availableRecipes" headingText="Recipes that match your products" className="recipes-list" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RecipeList from "./components/RecipesList";
    import ProductsList from "./components/ProductsList";

    export default {
        name: "App",
        components: {
            RecipeList,
            ProductsList
        },
        data: function () {
            return {
                products: ["cabbage", "potatoes", "carrot", "chicken", "beef", "cod", "apples", "wine", "leek", "onion", "mushrooms", "peach", "plums"],
                selectedProducts: [],
                recipes: [
                    {id: 1, title: "Chicken with cabbage and potatoes", ingredients: ["chicken", "cabbage", "potatoes"]},
                    {id: 2, title: "Carrot with cabbage", ingredients: ["carrot", "cabbage"]},
                    {id: 3, title: "Cabbage with potatoes", ingredients: ["cabbage", "potatoes"]},
                    {id: 4, title: "Chicken with potatoes, carrot and cabbage", ingredients: ["chicken", "potatoes", "carrot", "cabbage"]},
                    {id: 5, title: "Beef in wine with cabbage", ingredients: ["beef", "cabbage", "wine"]},
                    {id: 6, title: "Chicken with mushrooms and onion", ingredients: ["chicken", "mushrooms", "onion"]},
                    {id: 7, title: "Apples in wine with carrot", ingredients: ["apples", "carrot", "wine"]},
                    {id: 8, title: "Chicken with potatoes, carrot, leek and peach", ingredients: ["potatoes", "leek", "peach", "carrot", "chicken"]},
                    ],
                availableRecipes: []
            };
        },
        methods: {
            selectProduct: function (product) {
                if (this.selectedProducts.includes(product)) {
                    this.selectedProducts = this.selectedProducts.filter(
                        el => el !== product
                    );
                } else {
                    this.selectedProducts.push(product);
                }
                this.checkMatch();
            },
            checkMatch: function () {
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
        }
    };
</script>
<style lang="scss">
    @import "./sass/main.scss";

    body {
        background: url('./assets/bg.jpg');
        color: $color;
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
<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <ProductsList :products="products" :selectProduct="selectProduct"/>
                </div>
            </div>
            <RecipeList :selectedProducts="selectedProducts" :recipes="recipes" :availableRecipes="availableRecipes" />
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
                products: ["kapusta", "ziemniaki", "marchew", "kurczak"],
                selectedProducts: [],
                recipes: [
                    {id: 1, title: "Kurczak z kapustką", ingredients: ["kurczak", "kapusta", "omasta"]},
                    {id: 2, title: "Marchew z kapustką", ingredients: ["marchew", "kapusta"]},
                    {id: 3, title: "Kapusta z ziemniakami", ingredients: ["kapusta", "ziemniaki"]},
                    {id: 4, title: "Kurczak z ziemniakami i marchewką i kapustką", ingredients: ["kurczak", "ziemniaki", "marchew", "kapusta"]},
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
                let { selectedProducts, recipes, availableRecipes } = this;

                recipes.forEach((el)=> {
                    const ingredientsAmmount = el.ingredients.length;
                    let matches = 0;

                    if (el.ingredients.length > selectedProducts.length) {
                        if (availableRecipes.includes(el)) {
                            availableRecipes = availableRecipes.filter(elem => elem !== el)
                        }
                        return false
                    } else {
                        el.ingredients.forEach((element)=>{
                            selectedProducts.forEach((product) => {
                                if (product.toLowerCase() === element.toLowerCase()) {
                                    matches++;
                                }
                            })
                        })
                    }

                    if (matches === ingredientsAmmount) {
                        if (!availableRecipes.includes(el)) {
                            availableRecipes.push(el)
                        }
                    } else if (availableRecipes.includes(el)) {
                        availableRecipes = availableRecipes.filter(elem => elem !== el)
                    }
                })
            },
        }
    };
</script>
<style lang="scss">
    @import "./sass/main.scss";

    body {
        color: $color;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
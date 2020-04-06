<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <ProductsList :products="products" :selectProduct="selectProduct"/>
                </div>
                <div class="col-sm-12">
                    <RecipeList :selectedProducts="selectedProducts" :recipes="recipes" />
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
                products: ["kapusta", "ziemniaki", "marchew", "kurczak"],
                selectedProducts: [],
                recipes: [
                    {title: "Kurczak z kapustką", ingredients: ["kurczak", "kapusta", "omasta"]}
                    ]
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
            }
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
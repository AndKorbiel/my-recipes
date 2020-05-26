<template lang="pug">
    #app
        Navbar
        .container-fluid.main-container
            .row
                .col-sm-12.col-md-3
                    ProductsList
                    SubmitForm(
                        :error="productsErrors"
                        mode="Product"
                        :element="product"
                        :method="addProduct"
                        :message="productsMessages"
                        headingText="Add new product"
                        placeholder="Product name")
                .col-sm-12.col-md-6
                    RecipeList(:recipes="recipesList" headingText="Recipes list" className="recipes-list all-recipes")
                .col-sm-12.col-md-3
                    RecipeList(:recipes="availableRecipesList" headingText="Recipes that match your products" className="recipes-list")
                    SubmitForm(
                        :error="recipesErrors"
                        :element="recipe"
                        :method="addRecipe"
                        :message="recipesMessages"
                        headingText="Add new recipe"
                        placeholder="Recipe title")
</template>

<script>
    import RecipeList from "../components/RecipesList";
    import ProductsList from "../components/ProductsList";
    import SubmitForm from "../components/SubmitForm";
    import { mapActions, mapGetters } from "vuex";
    import Navbar from "../components/Navbar";

    export default {
        name: "App",
        components: {
            Navbar,
            RecipeList,
            ProductsList,
            SubmitForm
        },
        data: function () {
            return {
                product: {
                    name: ''
                },
                recipe: {
                    title: '',
                    ingredients: []
                }
            };
        },
        computed: {
            ...mapGetters("products", ["productsList", "productsErrors", "productsMessages", "recipesList", "recipesErrors", "availableRecipesList", "recipesMessages"])
        },
        methods: {
            ...mapActions("products", ["getProducts", "getRecipes",  "createProduct", "createRecipe"]),
            addProduct() {
                this.createProduct({name: this.product.name} );
                this.product.name = "";
            },
            addRecipe() {
                let formattedRecipe = this.formatRecipe(this.recipe);
                this.createRecipe( { title: formattedRecipe.title, ingredients: formattedRecipe.ingredients } );
                this.recipe.title = "";
                this.recipe.ingredients = [];
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
        },
        created() {
            this.getProducts();
            this.getRecipes();
        },
    };
</script>
<style lang="scss">

</style>
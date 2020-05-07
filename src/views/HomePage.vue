<template lang="pug">
    #app
        .container-fluid
            .row
                .col-sm-12.col-md-3
                    ProductsList(:selectProduct="selectProduct")
                    SubmitForm(
                        :error="$store.state.errors.products"
                        mode="Product"
                        :element="product"
                        :method="addProduct"
                        :message="$store.state.messages.products"
                        headingText="Add new product"
                        placeholder="Product name")
                .col-sm-12.col-md-6
                    RecipeList(:recipes="$store.state.recipes" headingText="Recipes list" className="recipes-list all-recipes")
                .col-sm-12.col-md-3
                    RecipeList(:recipes="$store.state.availableRecipes" headingText="Recipes that match your products" className="recipes-list")
                    SubmitForm(
                        :error="$store.state.errors.recipes"
                        :element="recipe"
                        :method="addRecipe"
                        :message="$store.state.messages.recipes"
                        headingText="Add new recipe"
                        placeholder="Recipe title")
</template>

<script>
    import RecipeList from "../components/RecipesList";
    import ProductsList from "../components/ProductsList";
    import SubmitForm from "../components/SubmitForm";


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
                product: {
                    name: ''
                },
                recipe: {
                    title: '',
                    ingredients: []
                }
            };
        },
        created() {
            this.$store.dispatch('getProducts');
            this.$store.dispatch('getRecipes');
        },
        methods: {
            selectProduct(product) {
                this.$store.dispatch('selectProduct',  product  );
            },
            addProduct() {
                this.$store.dispatch('createProduct', {name: this.product.name} );
                this.product.name = "";
            },
            addRecipe() {
                let formattedRecipe = this.formatRecipe(this.recipe);
                this.$store.dispatch('createRecipe', { title: formattedRecipe.title, ingredients: formattedRecipe.ingredients } );
                this.product.name = "";
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

</style>
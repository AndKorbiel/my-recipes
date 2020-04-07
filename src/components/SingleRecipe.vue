<template>
    <div class="row">
        <div class="col-sm-3" v-for="recipe in recipes" :key="recipe.title">
            <div class="single-recipe">
                <h3>{{ recipe.title }}</h3>
                <ul v-for="ingredient in recipe.ingredients" :key="ingredient">
                    <li>{{ ingredient }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleRecipe",
        props: {
            recipes: Array,
            availableRecipes: Array,
        }
    }
</script>

<style>
    .single-recipe {
        padding: 10px;
        margin: 5px;
        background: #e8e8e8;
    }
</style>
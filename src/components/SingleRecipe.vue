<template>
    <div class="single-recipe" >
        <div v-for="recipe in recipes" :key="recipe.title">
            <h3>{{ recipe.title }}</h3>
            <ul v-for="ingredient in recipe.ingredients" :key="ingredient">
                <li>{{ ingredient }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingleRecipe",
        props: {
            recipes: Array
        }
    }
</script>

<style>
    .single-recipe {
        display: block;
        width: 50%;
        background: #e8e8e8;
    }
</style>
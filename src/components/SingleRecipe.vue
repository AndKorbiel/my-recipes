<template>
        <div class="recipe-container">
            <div class="single-recipe" v-for="recipe in recipes" :key="recipe.title">
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
            recipes: Array,
            availableRecipes: Array,
        }
    }
</script>

<style lang="scss">
    .recipe-container {
        display: block;
        width: 100%;

        .single-recipe {
            padding: 10px;
            margin: 5px;
            background: #eae3d9;
            border: 1px solid #d0d0d0;
            box-shadow: 1px 1px 3px #cccccc;
        }

        h3, .h3 {
            font-size: 18px;
            font-weight: bold;
        }

        ol, ul, dl {
            margin-top: 0;
            margin-bottom: 0;
            padding: 0;
            list-style: circle;
            text-align: left;
            margin-left: 20px;
        }
    }

    .all-recipes .recipe-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .single-recipe {
            max-width: 212px;
        }
    }
</style>
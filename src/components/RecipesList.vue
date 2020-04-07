<template>
    <div class="recipe-list">
        <h2>To nasze wszystkie przepisy</h2>
        <SingleRecipe :recipes="recipes"/>
        <h2>Produkty które masz</h2>
        <ul class="temp">
            <li v-for="product of selectedProducts" :key="product">{{ product }}</li>
        </ul>
        <h2>A to nasze pasujące przepisy</h2>
        <SingleRecipe :recipes="availableRecipes"/>
    </div>
</template>

<script>
  import SingleRecipe from "./SingleRecipe";
    export default {
        name: "RecipeList",
        props: {
            selectedProducts: Array,
            recipes: Array,
            availableRecipes: Array
        },
      components: {
          SingleRecipe
      }
    };
</script>

<style lang="scss">

</style>
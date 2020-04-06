<template>
    <div class="recipe-list">
      <h2>Products you have:</h2>
        <ul class="temp">
            <li v-for="product of selectedProducts" :key="product">{{ product }}</li>
        </ul>
      <SingleRecipe :recipes="recipes" />
    </div>
</template>

<script>
  import SingleRecipe from "./SingleRecipe";
    export default {
        name: "RecipeList",
        props: {
            selectedProducts: Array,
            recipes: Array,
        },
      components: {
          SingleRecipe
      }
    };
</script>

<style lang="scss">
    .recipe-list {
        display: flex;
    }
</style>
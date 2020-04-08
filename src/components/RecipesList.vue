<template>
    <div :class="className">
        <div class="heading">
            <h2>{{ headingText }}</h2>
        </div>
        <SingleRecipe :recipes="recipes"/>
    </div>
</template>

<script>
  import SingleRecipe from "./SingleRecipe";
    export default {
        name: "RecipeList",
        props: {
            recipes: Array,
            headingText: String,
            className: String,
        },
      components: {
          SingleRecipe
      }
    };
</script>

<style lang="scss">

</style>
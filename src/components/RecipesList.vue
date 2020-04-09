<template lang="pug">
    div(:class="className")
        .heading
            h2 {{ headingText }}
        SingleRecipe(:recipes="recipes")
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
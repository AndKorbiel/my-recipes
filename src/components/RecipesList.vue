<template>
  <div class="recipe-list">
    <ul>
      <li v-for="product of selectedProducts" :key="product">{{ product }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecipeList",
  props: {
    selectedProducts: Array
  }
};
</script>

<style lang="scss">
.recipe-list {
  display: flex;
}
</style>
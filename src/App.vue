<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="product-list">
            <SingleProduct
              v-for="product of products"
              :key="product"
              :productName="product"
              :selectProduct="selectProduct"
            />
          </div>
        </div>
        <div class="col-sm-12">
          <RecipeList :selectedProducts="selectedProducts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from "./components/SingleProduct";
import RecipeList from "./components/RecipesList";

export default {
  name: "App",
  components: {
    SingleProduct,
    RecipeList
  },
  data: function() {
    return {
      products: ["kapusta", "ziemniaki", "marchew", "kurczak"],
      selectedProducts: []
    };
  },
  methods: {
    selectProduct: function(product) {
      console.log(product);
      if (this.selectedProducts.includes(product)) {
        this.selectedProducts = this.selectedProducts.filter(
          el => el != product
        );
      } else {
        this.selectedProducts.push(product);
      }
    }
  }
};
</script>
<style lang="scss">
@import "./sass/main.scss";

body {
  color: $color;
}

.product-list {
  display: flex;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

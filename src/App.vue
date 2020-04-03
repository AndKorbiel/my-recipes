<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="product-list">
            <SingleProduct v-for="product of products" :key="product" :productName="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from "./components/SingleProduct";

export default {
  name: 'App',
  components: {
    SingleProduct,
  },
  data: function() {
    return {
      products: [
        "kapusta", "ziemniaki", "marchew", "kurczak"
      ]
    }
  }
}
</script>
<style lang="scss">
  @import './sass/main.scss';

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

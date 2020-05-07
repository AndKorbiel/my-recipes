<template lang="pug">
    .product-list
        .heading
            h2 Select the ingredients you have
        SingleProduct(v-for="product of $store.state.products"
            :key="product.id"
            :productName="product.name"
            :selectProduct="selectProduct")
</template>

<script>
    import SingleProduct from "./SingleProduct";

    export default {
        name: "ProductsList",
        components: {
            SingleProduct
        },
        props: {
            selectProduct: Function
        }
    }
</script>

<style lang="scss">
    .product-list, .recipes-list {
        display: flex;
        margin-bottom: 20px;
        background: rgba(255, 255, 255, 0.749);
        padding: 15px;
        box-shadow: 2px 2px 11px #929292;
        flex-wrap: wrap;
        justify-content: center;

        .heading {
            width: 100%;
        }
    }
</style>
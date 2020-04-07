<template>
    <div class="product-list">
        <SingleProduct v-for="product of products" :key="product"
                       :productName="product"
                       :selectProduct="selectProduct"
        />
    </div>
</template>

<script>
    import SingleProduct from "./SingleProduct";

    export default {
        name: "ProductsList",
        components: {
            SingleProduct
        },
        props: {
            products: Array,
            selectProduct: Function
        }
    }
</script>

<style>
    .product-list {
        display: flex;
        margin-bottom: 20px;
    }
</style>
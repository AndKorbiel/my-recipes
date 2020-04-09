<template lang="pug">
    .single-product
        p(:value="productName" @click="selectProduct(productName), select()" :class="{selected: selected}") {{ productName }}
</template>

<script>
    export default {
        name: "SingleProduct",
        props: {
            productName: String,
            selectProduct: Function
        },
        data: function(){
            return {
                selected: false
            }
        },
        methods: {
            select: function () {
                this.selected = !this.selected
            }
        }
    };
</script>

<style lang="scss">
    @import "src/sass/main";

    .single-product {
        margin: 5px;
        box-shadow: 2px 2px 4px #8c8c8c;

        p {
            margin-bottom: 0;
            padding: 20px 15px;
            background: $product-bg-color;
            cursor: pointer;
        }

        .selected {
            background: #83efae;
        }
    }
</style>
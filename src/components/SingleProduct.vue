<template>
    <div class="single-product">
        <h3 :value="productName" @click="selectProduct(productName), select()" :class="{selected: selected}">{{ productName }}</h3>
    </div>
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
    .single-product {
        border: 1px solid grey;
        padding: 20px 15px;

        h3 {
            margin-bottom: 0;
        }
    }

    .selected {
        background: bisque;
    }
</style>
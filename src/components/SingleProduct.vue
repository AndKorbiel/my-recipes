<template>
    <div class="single-product">
        <h3 :value="productName" v-on:click="logName">{{ productName }}</h3>
    </div>
</template>

<script>
export default {
    name: 'SingleProduct',
    props: {
        productName: String
    },
    methods: {
        logName: function () {
            console.log(this.productName)
        }
    }
}
</script>

<style lang="scss">
    .single-product {
        border: 1px solid grey;
        padding: 20px 15px;
        h3 {
            margin-bottom: 0;
        }
    }
</style>
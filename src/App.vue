<template lang="pug">
    router-view
</template>

<script>
    export default {
        name: "App",
    };
</script>
<style lang="scss">
    @import "./sass/main.scss";

    body {
        background: url('./assets/bg.jpg');
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

        h2, .h2 {
            font-size: 25px;
        }
    }
</style>
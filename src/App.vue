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
        background-attachment: fixed;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $main-font-color;

        h2, .h2 {
            font-size: 25px;
        }

        .main-container {
            margin: 60px auto;
        }
    }
</style>
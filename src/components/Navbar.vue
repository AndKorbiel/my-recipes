<template lang="pug">
    .container-fluid.navbar
        .row
            .cols-sm-12
                p {{ authorizationToken === true ? "autoryzacja" : "brak autoryzacji"}}
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "Navbar",
        computed: {
            ...mapGetters("auth", ["authorizationToken"])
        },
    }
</script>

<style lang="scss">
    .navbar {
        background: rgba(255, 255, 255, 0.82);
        border-bottom: 2px solid #fff;
    }
</style>
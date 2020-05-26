<template lang="pug">
    .container-fluid.navbar
        .row
            .col-sm-12.col-md-4
                router-link(:to="{ path: 'home' }") Home
                router-link(:to="{ path: 'register' }") Register new user
                router-link(:to="{ path: 'user-list' }") Users list
            .cols-sm-12.col-md-4(v-if="authorizationToken")
                p Zalogowano jako {{ currentUserName }}
                button(@click="logoutUserMethod") Wyloguj
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "Navbar",
        computed: {
            ...mapGetters("auth", ["authorizationToken", "currentUserName"])
        },
        methods: {
            ...mapActions("auth", ["logoutUser"]),
            logoutUserMethod() {
                this.logoutUser()
            }
        }
    }
</script>

<style lang="scss">
    .navbar {
        background: rgba(255, 255, 255, 0.82);
        border-bottom: 2px solid #fff;
    }
</style>
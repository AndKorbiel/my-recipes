<template lang="pug">
    #app
        Navbar
        .container-fluid.main-container
            .row
                .col-sm-12.col-md-4.offset-md-4
                    h1 Registered users list
                    ul(v-for="(user, i) in usersList" :key="i")
                        li {{ user.name }}
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import Navbar from "../components/Navbar";

    export default {
        name: 'UserListPage',
        components: {
            Navbar
        },
        data() {
            return {};
        },
        computed: {
            ...mapGetters("auth", ["usersList"])
        },
        methods: {
            ...mapActions("auth", ["fetchUsersList"])
        },
        created() {
            this.fetchUsersList();
        }
    }
</script>

<style>

</style>
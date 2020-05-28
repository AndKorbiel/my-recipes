<template lang="pug">
    #app
        Navbar
        .container-fluid.main-container
            .row
                .col-sm-12.col-md-4.offset-md-4
                    h1 Registered users list
                .col-sm-12.col-md-6.offset-md-3
                    table
                        thead
                            td Id
                            td Name
                            td Email
                            td Is admin?
                        tbody
                            tr(v-for="(user, i) in usersList" :key="i")
                                td {{ i+1 }}
                                td {{ user.name }}
                                td {{ user.email }}
                                td {{ user.role === 'ADMIN' ? 'Yes' : 'No' }}
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

<style lang="scss" scoped>
    table {
        border-collapse: collapse;
        width: 100%;
        background: #ffffffb5;
        box-shadow: 2px 2px 4px #b7b7b7;

        thead {
            background: #4a4a4a;
            color: white;
        }

        tr {
            border-bottom: 1px solid #4a4a4a;
        }

        td {
            padding: 8px;
        }
    }
</style>
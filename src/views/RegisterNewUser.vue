<template lang="pug">
    #app
        Navbar
        .container-fluid.main-container
            .row
                .col-sm-12.col-md-4.offset-md-4
                    h1 Register new user here
                    SubmitForm(
                        mode="Register"
                        :error="errors.users"
                        :element="user"
                        :method="registerNewUser"
                        :message="messages.users"
                        headingText="Please provide new user data")
</template>

<script>
    import SubmitForm from "../components/SubmitForm";
    import Navbar from "../components/Navbar";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'RegisterNewUserPage',
        components: {
            SubmitForm,
            Navbar
        },
        data: function () {
            return {
                user: {
                    name: '',
                    email: '',
                    password: ''
                },
                errors: {
                    users: ''
                },
                messages: {
                    users: ''
                }
            }
        },
        computed: {
            ...mapGetters("auth", ["authToken"])
        },
        methods: {
            ...mapActions("auth", ["registerUser", "fetchUsersList"]),
            registerNewUser() {
                this.registerUser({
                    email: this.user.email,
                    password: this.user.password,
                    name: this.user.name
                }).then(()=> {
                    this.errors.users = '';
                    this.messages.users = 'New user has been added';
                    this.user.name = '';
                    this.user.email = '';
                    this.user.password = '';
                }).catch(()=> {
                    this.errors.users = 'Something went wrong, please check provided data';
                    this.messages.users = '';
                })
            },
        }
    }
</script>

<style>

</style>
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
                    password: '',
                    isAdmin: false
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
            ...mapActions("auth", ["registerUser"]),
            registerNewUser() {
                this.registerUser({
                    email: this.user.email,
                    password: this.user.password,
                    name: this.user.name,
                    isAdmin: this.checkIfIsAdmin(this.user.isAdmin)
                }).then(()=> {
                    this.errors.users = '';
                    this.messages.users = 'New user has been added';
                    this.user.name = '';
                    this.user.email = '';
                    this.user.password = '';
                }).catch((err)=> {
                    this.errors.users = err.response.data.message;
                    this.messages.users = '';
                })
            },
            checkIfIsAdmin(value) {
                if (value == 'true') {
                    return "ADMIN"
                } else {
                    return "USER"
                }
            }
        }
    }
</script>

<style>

</style>
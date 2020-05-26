<template lang="pug">
    #app
        Navbar
        .container-fluid.main-container
            .row
                .col-sm-12.col-md-4.offset-md-4
                    h1 Please login to get access to app
                    SubmitForm(
                        mode="Login"
                        :error="errors.users"
                        :element="user"
                        :method="login"
                        :message="messages.users"
                        headingText="Add new recipe"
                        placeholder="Recipe title")
</template>

<script>
    import SubmitForm from "../components/SubmitForm";
    import Navbar from "../components/Navbar";
    import { mapActions } from "vuex";

    export default {
        name: "LoginPage",
        components: {
            SubmitForm,
            Navbar
        },
        data: function () {
            return {
                user: {
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
        methods: {
            ...mapActions("auth", ["authenticationUser"]),
            login() {
                this.authenticationUser({
                    email: this.user.email,
                    password: this.user.password
                })
                    .then(()=> {
                        this.$router.push({name: "homePage"});
                        this.errors.users = '';
                        this.messages.users = 'Provided data are valid'

                    })
                    .catch(()=> {
                        this.errors.users = 'Invalid login data'
                    })
            }
        }
    }
</script>

<style>

</style>
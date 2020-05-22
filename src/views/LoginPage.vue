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
    const USERS_API_URL = "http://localhost:4000/users/";
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
                fetch(USERS_API_URL + 'login', {
                    method: "POST",
                    body: JSON.stringify(this.user),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.status !== 200) {
                            this.errors.users = result.message;
                            this.messages.users = ''
                        } else {
                            this.errors.users = "";
                            this.messages.users = `New product: ${this.product.name} has been added`;
                            this.products.push(result.details);
                            this.product.name = "";
                        }
                    })
                    .then(() => {
                        this.authenticationUser({
                            email: this.user.email,
                            password: this.user.password
                        })
                            .then(() => {
                                this.$router.push({ name: "homePage" });
                            })
                    })
            }
        }
    }
</script>

<style>

</style>
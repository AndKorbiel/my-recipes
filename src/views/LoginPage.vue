<template lang="pug">
    #app
        .container-fluid
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
    const USERS_API_URL = "http://localhost:4000/users/";

    export default {
        name: "LoginPage",
        components: {
            SubmitForm
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
                        console.log(result)
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
            }
        }
    }
</script>

<style>

</style>
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
    import { mapActions } from "vuex";
    const USERS_API_URL = "http://localhost:4000/users/";

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
        methods: {
            ...mapActions("auth", ["registerUser", "fetchUsersList"]),
            registerNewUser() {
                fetch(USERS_API_URL + 'register', {
                    method: "POST",
                    body: JSON.stringify(this.user),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(result => {
                        if (result.status !== 200) {
                            this.errors.users = 'Something went wrong, please check provided data';
                            this.messages.users = ''
                        } else {
                            this.registerUser({
                                email: this.user.email,
                                password: this.user.password,
                                name: this.user.name
                            });
                            this.messages.users = 'New user has been added'
                        }
                    })
            },
            // registerUserMethod() {
            //     const { name, email, password } = this.fields;
            //     if (this.$refs.form.validate()) {
            //         this.registerUser({
            //             email: email.value,
            //             password: password.value,
            //             name: name.value
            //         })
            //             .then(() => {
            //                 this.$notify({
            //                     group: "notify",
            //                     type: "success",
            //                     text: "Created user"
            //                 });
            //                 this.fetchUsersList();
            //             })
            //             .catch(() => {
            //                 this.$notify({
            //                     group: "notify",
            //                     type: "error",
            //                     text: "User creation failed"
            //                 });
            //             });
            //     }
            // }
        }
    }
</script>

<style>

</style>
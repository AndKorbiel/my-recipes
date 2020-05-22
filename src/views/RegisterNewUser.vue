<template lang="pug">
    #app
        Navbar
        .container-fluid.main-container
            .row
                .col-sm-12.col-md-4.offset-md-4
                    h1 Register new user here
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
    // const USERS_API_URL = "http://localhost:4000/users/";
    // import { mapActions } from "vuex";

    export default {
        name: 'RegisterNewUserPage',
        components: {
            SubmitForm,
            Navbar
        }
    }
</script>

<style>

</style>
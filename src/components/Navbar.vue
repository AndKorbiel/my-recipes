<template lang="pug">
    .container-fluid.navbar
        .row
            .col-sm-12.menu
                router-link(:to="{ path: '/' }") {{ authorizationToken ? 'Home' : 'Login' }}
                router-link(:to="{ path: 'register' }" v-if="isAdmin") Register new user
                router-link(:to="{ path: 'user-list' }" v-if="isAdmin") Users list
                div.login-section(v-if="authorizationToken")
                    span Logged in as: {{ currentUserName }}
                    a(@click="logoutUserMethod") Wyloguj
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "Navbar",
        computed: {
            ...mapGetters("auth", ["authorizationToken", "currentUserName", "isAdmin"])
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
    @import "../sass/main.scss";
    .navbar {
        background: rgba(255, 255, 255, 0.82);
        border-bottom: 2px solid #fff;
        flex-direction: column;
        justify-content: flex-end;

        .row {
            width: 100%;
        }

        .menu {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            a {
                display: block;
                padding: 10px 15px;
                background: #eae3d9;
                color: $main-font-color;
                float: left;
                margin: 0 15px;
                min-width: 100px;
                border-radius: 4px;
                box-shadow: 2px 2px 3px #c7c7c7;
            }

            .login-section {
                border-left: 1px solid #b6b0a7;
                margin-left: 20px;
                padding-left: 20px;

                a {
                    float: right;
                    cursor: pointer;
                }

                span {
                    float: left;
                    display: block;
                    line-height: 44px;
                }
            }
        }

        @media screen and (max-width: 768px) {
            .menu {
                flex-direction: column;

                .login-section a {
                    margin-bottom: 0;
                }

                a {
                    margin-bottom: 1em;
                }
            }
        }
    }
</style>
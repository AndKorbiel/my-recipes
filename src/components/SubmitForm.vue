<template lang="pug">
    .sub-form
        p(v-if="message" class="message") {{ message }}
        form.mb-3(@submit.prevent="method")
            .alert.alert-dismissible.alert-warning(v-if="error")
                h4.alert-heading Error!
                p.mb-0 {{ error }}
            .form-group
                h2 {{ headingText }}
                b-input-group(v-if="mode === 'Product'")
                    input(
                           v-model="element.name"
                           type="text"
                           class="form-control"
                           :placeholder="placeholder" required)

                b-input-group(v-else-if="mode === 'Login'")
                    input(
                        v-model="element.email"
                        type="text"
                        class="form-control"
                        placeholder="E-mail address" required)
                    input(
                        v-model="element.password"
                        type="password"
                        class="form-control"
                        placeholder="Password" required)

                b-input-group(v-else-if="mode === 'Register'")
                    input(
                        v-model="element.name"
                        type="text"
                        class="form-control"
                        placeholder="User name" required)
                    input(
                        v-model="element.email"
                        type="email"
                        class="form-control"
                        placeholder="User e-mail" required)
                    input(
                        v-model="element.password"
                        type="password"
                        class="form-control"
                        placeholder="Password" required)
                    label Make an admin?
                    select(
                        v-model="element.isAdmin"
                        class="form-control")
                        option(value="false" selected) no
                        option(value="true" selected) yes

                b-input-group(v-else)
                    input(
                            v-model="element.title"
                            type="text"
                            class="form-control"
                            :placeholder="placeholder" )
                    input(
                            v-model="element.ingredients"
                            type="text"
                            class="form-control"
                            placeholder="Add ingredients separated by comma" required)
            button.btn.btn-primary(type="submit") Submit
</template>

<script>
    export default {
        name: "SubmitForm",
        props: {
            error: String,
            mode: String,
            element: Object,
            method: Function,
            message: String,
            headingText: String,
            placeholder: String
        },
    }
</script>

<style lang="scss">
    .sub-form {
        background: rgba(255, 255, 255, 0.749);
        padding: 15px;
        box-shadow: 2px 2px 11px #929292;
        margin-bottom: 20px;

        .input-group {
            display: block;

            .form-control {
                margin-bottom: 10px;
            }
        }

        .message {
            color: #fff;
            background: #719c1e;
            padding: 5px;
        }

        .alert-dismissible {
            padding-right: 0;
        }
    }
</style>
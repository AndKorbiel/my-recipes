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
                b-input-group(v-else)
                    input(
                            v-model="element.title"
                            type="text"
                            class="form-control"
                            :placeholder="placeholder" required)
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
    }
</style>
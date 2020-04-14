<template>
    <div class="sub-form">
        <p v-if="message" class="message">{{ message }}</p>
        <form @submit.prevent="method" class="mb-3">
            <div v-if="error" class="alert alert-dismissible alert-warning">
                <h4 class="alert-heading">Error!</h4>
                <p class="mb-0">{{ error }}</p>
            </div>
            <div class="form-group">
                <h2> {{ headingText }}</h2>
                <b-input-group v-if="mode === 'Product'">
                    <input
                           v-model="element.name"
                           type="text"
                           class="form-control"
                           :placeholder="placeholder" required>
                </b-input-group>
                <b-input-group v-else>
                    <input
                            v-model="element.title"
                            type="text"
                            class="form-control"
                            :placeholder="placeholder" required>
                    <input
                            v-model="element.ingredients"
                            type="text"
                            class="form-control"
                            placeholder="Add ingredients separated by comma" required>
                </b-input-group>

            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
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
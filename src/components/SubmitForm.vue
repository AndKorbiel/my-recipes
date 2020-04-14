<template>
    <div class="sub-form">
        <p v-if="message">{{ message }}</p>
        <form @submit.prevent="method" class="mb-3">
            <div v-if="error" class="alert alert-dismissible alert-warning">
                <h4 class="alert-heading">Error!</h4>
                <p class="mb-0">{{error}}</p>
            </div>
            <div class="form-group">
                <h2>Add new product</h2>
                <input
                        v-model="element.name"
                        type="text"
                        class="form-control"
                        placeholder="Product name" required>
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
            element: Object,
            method: Function,
            message: String
        },
    }
</script>

<style lang="scss">
    .sub-form {
        background: rgba(255, 255, 255, 0.749);
        padding: 15px;
        box-shadow: 2px 2px 11px #929292;
    }
</style>
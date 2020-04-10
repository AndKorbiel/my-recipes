<template>
    <div>
        <p v-if="message">{{ message }}</p>
        <form @submit.prevent="method" class="mb-3">
            <div v-if="error" class="alert alert-dismissible alert-warning">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <h4 class="alert-heading">Error!</h4>
                <p class="mb-0">{{error}}</p>
            </div>
            <div class="form-group">
                <label for="username">Product name</label>
                <input
                        v-model="element.name"
                        type="text"
                        class="form-control"
                        id="username" required>
            </div>
            <button type="submit" class="btn btn-primary">Add Product</button>
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

</style>
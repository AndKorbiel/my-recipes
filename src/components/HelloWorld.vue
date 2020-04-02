<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>{{ msg }}</h1>
        <h2>So your val is: {{ val }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    val: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

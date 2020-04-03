<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>{{ msg }}</h1>
        <h2>So your val is: {{ messageToProps }}</h2>
        <p>A this imy local data: {{ myLocalData }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    messageToProps: String,
  },
  data: function () {
    return {
      myLocalData: 'This is my Local data'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

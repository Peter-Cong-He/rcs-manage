<template>
  <div id="app">
    <!-- <Home></Home> -->
    <router-view/>
  </div>
</template>

<script>
// import Home from './layout/Home'
export default {
  name: 'app',
  components: {
    // Home
  },
  mounted () {
    console.log(this.$router)
  }
}
</script>

<style>
</style>

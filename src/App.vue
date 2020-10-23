<template>
  <div id="app">
    <appHeader/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mt-5">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    'appHeader': Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
  body {
    padding: 50px;
  }
</style>

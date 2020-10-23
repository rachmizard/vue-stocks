<template>
  <div>
    <div class="col-md-4 mb-5">
      <router-link to="/stocks/add" class="btn btn-md btn-success">Add Stock</router-link>
    </div>
    <div class="row">
      <app-stock
        v-for="(stock, index) in stocks"
        :key="index"
        :stock="stock"
      ></app-stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>
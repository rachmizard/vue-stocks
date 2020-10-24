<template>
  <div>
    <div class="row">
      <app-stock
        v-for="(stock, index) in stocks"
        :key="index"
        :stock="stock"
      ></app-stock>
      <div v-if="!stocks.length">
        <small class="text-center text-muted"
          >You dont have any portofolio</small
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StockVue from "../portofolio/Stock.vue";

export default {
  components: {
    appStock: StockVue,
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortofolio",
    }),
  },
};
</script>
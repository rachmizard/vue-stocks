<template>
  <div class="col-lg-4 col-md-4 mb-5">
    <div class="card" style="width: 18rem">
      <img :src="stock.img" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Price : {{ stock.price | currency }} | Quantity : {{ stock.quantity }}</h6>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInputGroup">Quantity</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Quantity</div>
              </div>
              <input
                type="number"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Insert value"
                v-model="quantity"
                :class="{danger: insufficientFunds}"
              />
            </div>
            <small
              v-if="quantity > stock.quantity"
              id="nameHelp"
              class="form-text text-danger"
              >Stock limited!</small
            >
            <small
              v-if="insufficientFunds"
              class="form-text text-danger"
              >Insufficient Funds!</small
            >
          </div>
          <div class="col-auto">
            <button @click="buyStock" class="btn btn-success mb-2" :disabled="insufficientFunds || quantity <= 0 || quantity > stock.quantity">{{ stock.quantity ? `Buy` : insufficientFunds ? `Insufficient Funds!` : 'Out of Stock!' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds 
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      if(this.quantity <= this.stock.quantity) {
        this.$store.dispatch('buyStock', order) 
      }
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
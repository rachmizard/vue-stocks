<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Stock Trader</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" activeClass="active" tag="li">
            <a class="nav-link" href="#">Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" activeClass="active" tag="li">
            <a class="nav-link" href="#">Stocks</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portofolio" activeClass="active" tag="li">
            <a class="nav-link" href="#">Portofolio</a>
          </router-link>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" @click="endDay" href="#">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            @click="isDropdownOpen = !isDropdownOpen"
            >Save & Load</a
          >
          <div class="dropdown-menu" :class="{show: isDropdownOpen}">
            <a class="dropdown-item" href="#" @click="saveData">Save</a>
            <a class="dropdown-item" href="#" @click="loadData">Load</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortofolio: this.$store.getters.stockPortofolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

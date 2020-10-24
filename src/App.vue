<template>
  <div id="app">
    <appHeader />
    <div class="container-md">
      <div class="row">
        <div class="col-md-12 mt-5">
          <transition name="slide">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header,
  },
  methods: {
    ...mapActions(['initStocks', 'randomizeStocks'])
  },
  created() {
    this.initStocks()
    setInterval(() => {
      this.randomizeStocks()
    }, 8000);
  },
};
</script>

<style>
body {
  padding: 50px;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>

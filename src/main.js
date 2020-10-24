import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate";
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuelidate);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate";
import VueResource from 'vue-resource'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-43c57.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

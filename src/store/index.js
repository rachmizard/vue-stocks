import Vue from 'vue'
import Vuex from 'vuex'
import portofolio from './modules/portofolio'
import stocks from './modules/stocks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stocks,
    portofolio
  }
})

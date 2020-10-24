import Vue from 'vue'
import Vuex from 'vuex'
import portofolio from './modules/portofolio'
import stocks from './modules/stocks'
import auth from './modules/auth'

import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    auth,
    stocks,
    portofolio
  }
})

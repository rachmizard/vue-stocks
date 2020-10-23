import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/portofolio',
    component: () => import('../views/portofolio/Portofolio.vue')
  },
  {
    path: '/stocks',
    component: () => import('../views/stocks/Stocks.vue')
  },
  {
    path: '/stocks/add',
    component: () => import('../views/stocks/AddStock.vue'),
    name: 'add-stock'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

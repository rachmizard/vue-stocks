import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login-page',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/portofolio',
    component: () => import('../views/portofolio/Portofolio.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/stocks',
    component: () => import('../views/stocks/Stocks.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/stocks/add',
    component: () => import('../views/stocks/AddStock.vue'),
    name: 'add-stock',
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router

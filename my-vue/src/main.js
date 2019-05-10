// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/home/home.vue'
import Categories from './components/categories/categories.vue'
import ShoppingCart from './components/shoppingCart/shoppingCart.vue'
import Me from './components/me/me.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// Vue.prototype.$http = axios

// axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'appliction/json;charset=UTF-8'
// axios.defaults.baseURL = 'http://localhost:8082/'

Vue.use(Vant)
// import VueResource from 'vue-resource'
// import secondcomponent from './components/secondcomponent.vue'

// Vue.config.debug = true

Vue.use(VueRouter)
// Vue.use(VueResource)
// Vue.config.productionTip = false
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  }
]
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

// new Vue({
//   router
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

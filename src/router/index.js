import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass:'active'
});

export default router

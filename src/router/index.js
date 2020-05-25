import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [{
      path: '/index/home',
      name: '首页',
      component: () => import('../views/home.vue')
    }, {
      path: '/index/aboutUs',
      name: '关于我们',
      component: () => import('../views/aboutUs.vue')
    }, {
      path: '/index/product',
      name: '产品简介',
      component: () => import('../views/product.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

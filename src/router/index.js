import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import phoneIndex from '../views/phoneIndex.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/index/home',
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
    }, {
      path: '/systemStore/homePage',
      name: 'homePage',
      component: () => import('../views/appStore/index.vue')
    }, {
      path: '/systemStore/detail/:systemType',
      name: 'detail',
      component: () => import('../views/appStore/detail.vue')
    }]
  }, {
    path: '/index/phone',
    name: '移动端首页',
    component: phoneIndex,
    children: [{
      path: '/index/phone/phoneHome',
      name: '移动端首页',
      component: () => import('../views/phoneHome.vue')
    }, {
      path: '/index/phone/phoneAboutUs',
      name: '关于我们',
      component: () => import('../views/phoneAboutUs.vue')
    }, {
      path: '/index/phone/phoneProduct',
      name: '产品简介',
      component: () => import('../views/phoneProduct.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

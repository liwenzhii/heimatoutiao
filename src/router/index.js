import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'
import home from '../views/home/index.vue'
import mainVue from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: home,
    children: [{
      path: '',
      component: mainVue
    },
    {
      path: 'commant',
      component: () => import('../views/home/commant.vue')
    },
    {
      path: 'material',
      component: () => import('../views/home/material.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router

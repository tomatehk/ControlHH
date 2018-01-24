import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  ]
})

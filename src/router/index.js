import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Main from '@/components/Main'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    components: {
      login: Login
    }
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/bedrooms-status',
    components: {

    }
  }
  ]
})

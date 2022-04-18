import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login')
const Users = () => import(/* webpackChunkName: 'users' */ '../views/Users')

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

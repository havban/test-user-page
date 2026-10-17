import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Login = () => import('../views/Login.vue')
const Users = () => import('../views/Users.vue')

const routes = [
  {
    path: '/:pathMatch(.*)*',
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

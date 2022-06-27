import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/index.vue'

const publicRoutes = [
  {
    path: '/',
    name: 'Login',
    component: Login
    // redirect:Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export default router

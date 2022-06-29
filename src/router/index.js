import { createRouter, createWebHashHistory } from 'vue-router'
const publicRoutes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/login')
    // redirect:Login
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../layout/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import ArticleRanking from './modules/ArticleRanking'
import UserManage from './modules/UserManage'
import RoleList from './modules/RoleList'
import PermissionList from './modules/PermissionList'
import ArticleCreate from './modules/ArticleCreate'
export const publicRoutes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/login')
    // redirect:Login
  },

  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      // {
      //   path: '/chart',
      //   name: 'chart',
      //   component: () => import('@/views/chart'),
      //   meta: {
      //     title: '数据可视化',
      //     icon: 'chart'
      //   }
      // },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]

// const privateRoutes = [
//   {
//     path: '/user',
//     name: 'user',
//     component: () => import('@/layout'),
//     redirect: '/user/manage',
//     meta: {
//       title: '用户',
//       icon: 'personnel'
//     },
//     children: [
//       {
//         path: '/user/manage',
//         name: 'userManage',
//         component: () => import('@/views/user-manage'),
//         meta: {
//           title: '员工管理',
//           icon: 'personnel-manage'
//         }
//       },
//       {
//         path: '/user/role',
//         name: 'userRole',
//         component: () => import('@/views/role-list'),
//         meta: {
//           title: '角色列表',
//           icon: 'role'
//         }
//       },
//       {
//         path: '/user/permission',
//         name: 'userPermission',
//         component: () => import('@/views/permission-list'),
//         meta: {
//           title: '权限列表',
//           icon: 'permission'
//         }
//       },
//       {
//         path: '/user/info/:id',
//         name: 'userInfo',
//         component: () => import('@/views/user-info')
//       },
//       {
//         path: '/user/import',
//         name: 'userImport',
//         component: () => import('@/views/import')
//       }
//     ]
//   },
//   {
//     path: '/article',
//     name: 'article',
//     component: () => import('@/layout'),
//     meta: {
//       title: '文章',
//       icon: 'article'
//     },
//     redirect: '/article/ranking',
//     children: [
//       {
//         path: '/article/ranking',
//         name: 'articleRanking',
//         component: () => import('@/views/article-ranking'),
//         meta: {
//           title: '文章排名',
//           icon: 'article-ranking'
//         }
//       },
//       {
//         path: '/article/create',
//         name: 'articleCreate',
//         component: () => import('@/views/article-create'),
//         meta: {
//           title: '创建文章',
//           icon: 'article-create'
//         }
//       },
//       {
//         path: '/article/:id',
//         name: 'articleDetail',
//         component: () => import('@/views/article-detail')
//       }
//     ]
//   }
// ]
// 私有路由表
export const privateRoutes = [
  UserManage,
  RoleList,
  PermissionList,
  ArticleRanking,
  ArticleCreate
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export default router

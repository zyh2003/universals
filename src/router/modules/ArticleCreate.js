// import Layout from '@/layout'

export default {
  path: '/article',
  component: () => import('@/layout'),
  name: 'articleCreate',
  meta: {
    title: '文章',
    icon: 'article'
  },
  children: [
    {
      path: '/article/create',
      component: () => import('@/views/article-create'),
      meta: {
        title: '文章创建',
        icon: 'article-create'
      }
    }
  ]
}

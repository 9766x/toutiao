import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/', // 默认子路由,只能有一个
    name: 'layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/login')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/auth'
Vue.use(VueRouter)
let router = new VueRouter({
  // 滚动行为
  scrollBehavior(to, from, savedPosion) {
    //返回的这个y=e，代表的滚动条在最上方
    return { y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/Index.vue'),
      meta: { show: true, transitionName: 'fade' },
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login.vue'),
      meta: { show: false, transitionName: 'fade' },
    },
    {
      path: '/consult',
      name: 'Consult',
      component: () => import('@/pages/Consult.vue'),
      meta: { show: true, transitionName: 'fade' },
    },
    {
      path: '/appreciate',
      name: 'Appreciate',
      component: () => import('@/pages/Appreciate.vue'),
      meta: { show: true, transitionName: 'fade' },
      children: [],
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/pages/Detail.vue'),
      meta: { show: false, transitionName: 'fade' },
    },

    {
      path: '/intro',
      name: 'Intro',
      component: () => import('@/pages/Intro.vue'),
      meta: { show: true, transitionName: 'fade' },
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/pages/Order.vue'),
      meta: { show: true, transitionName: 'fade' },
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/404.vue'),
      meta: { show: false, transitionName: 'fade' },
    },
  ],
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  try {
    const token = getToken()
    console.log(token)
    if (!token && to.path !== '/login') {
      // 用户未登录且目标路由不是登录页
      next('/login')
    } else if (token && to.path === '/login') {
      // 用户已登录且目标路由是登录页
      next('/')
    } else {
      // 其他情况
      next()
    }
  } catch (error) {
    console.error(error)
    next('/login') // 异常情况下重定向到登录页
  }
})
export default router

import {
  BasicLayouts,
} from '@/layouts'
// import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'
import orderRoute from './modules/order'
import customRoute from './modules/custom'
import financialRoute from './modules/financial'
import planeRoute from './modules/plane'
import flightRoute from './modules/flight'
import airlineRoute from './modules/airline'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: 'center',
    name: '个人中心',
    meta: {
      title: '个人中心'
    },
    component: () => import( /* webpackChunkName: "fail" */ '@/views/user/center')
  }, 
  {
    path: '/register',
    name: 'register',
    hidden: true,
    meta: {
      title: '用户注册'
    },
    component: () => import( /* webpackChunkName: "fail" */ '@/views/user/register')
  },
  {
    path: '/login',
    hidden: true,
    meta: {
      title: '用户登录'
    },
    component: () => import( /* webpackChunkName: "fail" */ '@/views/user/login')
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: BasicLayouts,
    name: '首页',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'dashboard',
        name: '概览',
        meta: {
          title: '概览'
        },
        component: () => import('@/views/dashboard/index')
      },
      orderRoute,
      customRoute,
      financialRoute,
      planeRoute,
      flightRoute,
      airlineRoute,
    ]
  },
  {
    path: '404',
    hidden: true,
    component: () => import( /* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
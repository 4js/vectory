import { BasicLayouts } from '@/layouts'
// import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
//   {
//     path: '/user',
//     component: UserLayout,
//     redirect: '/user/login',
//     hidden: true,
//     children: [
//       {
//         path: 'login',
//         name: 'login',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
//       },
//       {
//         path: 'register',
//         name: 'register',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
//       },
//       {
//         path: 'register-result',
//         name: 'registerResult',
//         component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
//       }
//     ]
//   },

  {
    path: '/dashboard',
    component: BasicLayouts,
    redirect: '/dashboard/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/login/index')
  }

]

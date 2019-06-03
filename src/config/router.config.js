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
    path: '/resource',
    component: BasicLayouts,
    name: '资源管理',
    redirect: '/resource/cluster',
    children: [
      {
        path: 'cluster',
        name: '集群全貌',
        component: () => import('@/views/resource/cluster/index')
      },
      {
        path: 'server',
        name: '服务器',
        component: () => import('@/views/resource/server/index')
      },
      {
        path: 'disk',
        name: '硬盘',
        component: () => import('@/views/resource/disk/index')
      },
      {
        path: 'device',
        name: '设备组',
        redirect: '/resource/device/index',
        component: () => import('@/views/resource/device/index'),
        children: [
          {
            path: 'index',
            name: '设备组',
            component: () => import('@/views/resource/device/list')
          },
          {
            path: 'add',
            name: '添加设备组',
            component: () => import('@/views/resource/device/add')
          }
        ]
      },
      {
        path: 'pool',
        name: '存储池',
        component: () => import('@/views/resource/pool/index')
      }
    ]
  },
  {
    path: '/',
    redirect: '/resource/cluster'
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/user/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/user/register')
  }
]

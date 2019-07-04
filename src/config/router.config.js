import { BasicLayouts } from '@/layouts'
// import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
// import { bxAnaalyse } from '@/core/icons'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    // {
    //   path: '/user',
    //   component: UserLayout,
    //   redirect: '/user/login',
    //   hidden: true,
    //   children: [
    //     {
    //       path: 'login',
    //       name: 'login',
    //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
    //     },
    //     {
    //       path: 'register',
    //       name: 'register',
    //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
    //     },
    //     {
    //       path: 'register-result',
    //       name: 'registerResult',
    //       component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
    //     }
    //   ]
    // },

  {
    path: '/resource',
    component: BasicLayouts,
    name: '资源管理',
    meta: { title: '资源管理' },
    redirect: '/resource/cluster',
    children: [
      {
        path: 'cluster',
        name: '集群全貌',
        meta: { title: '集群全貌' },
        component: () => import('@/views/resource/cluster/index')
      },
      {
        path: 'server',
        name: '服务器',
        meta: { title: '服务器' },
        component: () => import('@/views/resource/server/index')
      },
      {
        path: 'disk',
        name: '硬盘',
        meta: { title: '硬盘' },
        component: () => import('@/views/resource/disk/index')
      },
      {
        path: 'device',
        name: '设备组',
        meta: { title: '设备组' },
        redirect: '/resource/device/index',
        component: () => import('@/views/resource/device/index'),
        children: [
          {
            path: 'index',
            name: '设备组',
            meta: { title: '设备组' },
            component: () => import('@/views/resource/device/list')
          },
          {
            path: 'add',
            name: '添加设备组',
            meta: { title: '添加设备组' },
            component: () => import('@/views/resource/device/add')
          }
        ]
      },
      {
        path: 'pool',
        name: '存储池',
        meta: { title: '存储池' },
        component: () => import('@/views/resource/pool/index')
      }
    ]
  },
  {
    path: '/storage',
    component: BasicLayouts,
    name: '存储服务',
    meta: { title: '存储服务' },
    redirect: '/storage/block',
    children: [
      {
        path: 'block',
        name: '块存储',
        meta: { title: '块存储' },
        component: () => import('@/views/storage/block/index')
      }
    ]
  },
  {
    path: '/config',
    component: BasicLayouts,
    name: '基础配置',
    meta: { title: '基础配置' },
    redirect: '/config/parameter',
    children: [
      {
        path: 'parameter',
        name: '集群参数管理',
        meta: { title: '集群参数管理' },
        component: () => import('@/views/config/parameter/index')
      }
    ]
  },
  {
    path: '/protect',
    component: BasicLayouts,
    name: '数据安全',
    meta: { title: '数据安全' },
    redirect: '/protect/key',
    children: [
      {
        path: 'key',
        name: '秘钥管理',
        meta: { title: '秘钥管理' },
        component: () => import('@/views/protect/key/index')
      }
    ]
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/login',
    meta: { title: '用户登录' },
    component: () => import(/* webpackChunkName: "fail" */ '@/views/user/login')
  },
  {
    path: '/dashboard',
    component: BasicLayouts,
    name: '首页',
    meta: { title: '首页' },
    redirect: '/dashboard',
    children: [
      {
        path: '',
        name: '概览',
        meta: { title: '概览' },
        component: () => import('@/views/dashboard/index')
      }
    ]
    // component: () => import(/* webpackChunkName: "fail" */ '@/views/dashboard/index')
  },
  {
    path: '/user',
    component: BasicLayouts,
    name: '首页',
    meta: { title: '首页' },
    redirect: '/user/center',
    children: [
      {
        path: 'center',
        name: '个人中心',
        meta: { title: '个人中心' },
        component: () => import(/* webpackChunkName: "fail" */ '@/views/user/center')
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: '用户注册' },
    component: () => import(/* webpackChunkName: "fail" */ '@/views/user/register')
  }
]

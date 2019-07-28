import {
  BasicLayouts
} from '@/layouts'
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
    path: '/custom',
    component: BasicLayouts,
    name: '客户管理',
    meta: {
      title: '客户管理'
    },
    redirect: '/custom/common',
    children: [{
        path: 'common',
        name: '个人管理',
        meta: {
          title: '个人管理'
        },
        component: () => import('@/views/custom/common/index')
      },
      {
        path: 'flyer',
        name: '常旅客管理',
        meta: {
          title: '常旅客管理'
        },
        component: () => import('@/views/custom/flyer/index')
      },
      {
        path: 'vip',
        name: 'Vip客户管理',
        meta: {
          title: 'Vip客户管理'
        },
        component: () => import('@/views/custom/vip/index')
      },
      {
        path: 'black',
        name: '黑名单管理',
        meta: {
          title: '黑名单管理'
        },
        component: () => import('@/views/custom/black/index')
      }
    ]
  },
  {
    path: '/storage',
    component: BasicLayouts,
    name: '存储服务',
    meta: {
      title: '存储服务'
    },
    redirect: '/storage/block',
    children: [{
      path: 'block',
      name: '块存储',
      meta: {
        title: '块存储'
      },
      component: () => import('@/views/storage/block/index')
    }]
  },
  {
    path: '/config',
    component: BasicLayouts,
    name: '基础配置',
    meta: {
      title: '基础配置'
    },
    redirect: '/config/parameter',
    children: [{
      path: 'parameter',
      name: '集群参数管理',
      meta: {
        title: '集群参数管理'
      },
      component: () => import('@/views/config/parameter/index')
    }]
  },
  {
    path: '/protect',
    component: BasicLayouts,
    name: '数据安全',
    meta: {
      title: '数据安全'
    },
    redirect: '/protect/key',
    children: [{
      path: 'key',
      name: '秘钥管理',
      meta: {
        title: '秘钥管理'
      },
      component: () => import('@/views/protect/key/index')
    }]
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/404',
    component: () => import( /* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/login',
    meta: {
      title: '用户登录'
    },
    component: () => import( /* webpackChunkName: "fail" */ '@/views/user/login')
  },
  {
    path: '/dashboard',
    component: BasicLayouts,
    name: '首页',
    meta: {
      title: '首页'
    },
    redirect: '/dashboard',
    children: [{
      path: '',
      name: '概览',
      meta: {
        title: '概览'
      },
      component: () => import('@/views/dashboard/index')
    }]
    // component: () => import(/* webpackChunkName: "fail" */ '@/views/dashboard/index')
  },
  {
    path: '/user',
    component: BasicLayouts,
    name: '首页',
    meta: {
      title: '首页'
    },
    redirect: '/user/center',
    children: [{
      path: 'center',
      name: '个人中心',
      meta: {
        title: '个人中心'
      },
      component: () => import( /* webpackChunkName: "fail" */ '@/views/user/center')
    }]
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '用户注册'
    },
    component: () => import( /* webpackChunkName: "fail" */ '@/views/user/register')
  }
]
import {
  BasicLayouts
} from '@/layouts'

export default {
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
}
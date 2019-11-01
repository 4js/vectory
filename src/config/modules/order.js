import {
  BlankLayouts
  } from '@/layouts'

export default {
  path: 'order',
  component: BlankLayouts,
  name: '订单管理',
  meta: {
    title: '订单管理'
  },
  redirect: '/order/one',
  children: [{
      path: 'one',
      name: '个人订单',
      meta: {
        title: '个人订单'
      },
      component: () => import('@/views/order/one/index')
    },
    {
      path: 'group',
      name: '团体订单',
      meta: {
        title: '团体订单'
      },
      component: () => import('@/views/order/group/index')
    },
    {
      path: 'inside',
      name: '内部订单',
      meta: {
        title: '内部订单'
      },
      component: () => import('@/views/order/inside/index')
    },
  ]
}
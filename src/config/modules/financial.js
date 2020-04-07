import {
  BlankLayouts
  } from '@/layouts'

export default {
  path: 'financial',
  component: BlankLayouts,
  name: '财务管理',
  meta: {
    title: '财务管理'
  },
  redirect: '/financial/report',
  children: [{
      path: 'report',
      name: '财务报表',
      meta: {
        title: '财务报表'
      },
      component: () => import('@/views/financial/report/index')
    },
    {
      path: 'settle',
      name: '清算中心',
      meta: {
        title: '清算中心'
      },
      component: () => import('@/views/financial/settle/index')
    },
    {
      path: 'debt',
      name: '坏账管理',
      meta: {
        title: '坏账管理'
      },
      component: () => import('@/views/financial/debt/index')
    },
  ]
}
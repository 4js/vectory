import {
    BasicLayouts
  } from '@/layouts'

export default {
  path: 'plane',
  component: BasicLayouts,
  name: '机队管理',
  meta: {
    title: '机队管理'
  },
  redirect: '/plane/visitor',
  children: [{
      path: 'visitor',
      name: '客机管理',
      meta: {
        title: '客机管理'
      },
      component: () => import('@/views/plane/visitor/index')
    },
    {
      path: 'freight',
      name: '货机管理',
      meta: {
        title: '货机管理'
      },
      component: () => import('@/views/plane/freight/index')
    },
    {
      path: 'entrance',
      name: '引进计划',
      meta: {
        title: '引进计划'
      },
      component: () => import('@/views/plane/entrance/index')
    },
  ]
}
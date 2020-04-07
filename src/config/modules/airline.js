import {
  BlankLayouts
  } from '@/layouts'
  
  export default {
    path: 'airline',
    component: BlankLayouts,
    name: '航线管理',
    meta: {
      title: '航线管理'
    },
    redirect: '/airline/plan',
    children: [{
        path: 'plan',
        name: '航班计划',
        meta: {
          title: '航班计划'
        },
        component: () => import('@/views/airline/plan/index')
      },
      {
        path: 'line',
        name: '航线审批',
        meta: {
          title: '航线审批'
        },
        component: () => import('@/views/airline/line/index')
      },
      {
        path: 'city',
        name: '城市管理',
        meta: {
          title: '城市管理'
        },
        component: () => import('@/views/airline/city/index')
      }
    ]
  }
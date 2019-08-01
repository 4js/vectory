import {
    BasicLayouts
  } from '@/layouts'
  
  export default {
    path: '/airline',
    component: BasicLayouts,
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
        name: '航线管理',
        meta: {
          title: '航线管理'
        },
        component: () => import('@/views/airline/line/index')
      }
    ]
  }
import {
    BasicLayouts
  } from '@/layouts'
  
  export default {
    path: 'flight',
    component: BasicLayouts,
    name: '航班管理',
    meta: {
      title: '航班管理'
    },
    redirect: '/flight/domestic',
    children: [{
        path: 'domestic',
        name: '国内航班',
        meta: {
          title: '国内航班'
        },
        component: () => import('@/views/flight/domestic/index')
      },
      {
        path: 'internal',
        name: '国际航班',
        meta: {
          title: '国际航班'
        },
        component: () => import('@/views/flight/internal/index')
      },
      {
        path: 'wrap',
        name: '包机航班',
        meta: {
          title: '包机航班'
        },
        component: () => import('@/views/flight/wrap/index')
      }
    ]
  }
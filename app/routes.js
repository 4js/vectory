/**
 * Define application page routes.
 */


module.exports = [{
        path: '/',
        name: 'login',
        meta: {
            CnTitle: '网站首页',
            EnTitle: '',
            requireAuth: false,
        },
        redirect: '/login'
    },
    {
        path: '/list',
        name: 'list',
        meta: {
            CnTitle: '网站列表',
            EnTitle: '',
            requireAuth: false,
        },
        component: resolve => require.ensure(['./pages/list.vue'], require => require(['./pages/list.vue'], resolve), 'pages/list')
    },
    {
        path: '*',
        name: '404',
        meta: {
            CnTitle: '404错误',
            EnTitle: '',
            requireAuth: false,
        },
        component: resolve => require.ensure(['./pages/404.vue'], require => require(['./pages/404.vue'], resolve), 'pages/404')
    },
];
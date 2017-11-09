/**
 * Define application page routes.
 */


module.exports = [{
    path: '/',
    name: 'home',
    meta: {
        CnTitle: '网站首页',
        EnTitle: '',
        requireAuth: false,
    },
    redirect: '/home'
}, {
    path: '/home',
    name: 'home',
    meta: {
        CnTitle: 'home',
        EnTitle: '',
        requireAuth: false,
    },
    component: resolve => require.ensure(['./pages/home.vue'], require => require(['./pages/home.vue'], resolve), 'pages/home')
}, {
    path: '/list',
    name: 'list',
    meta: {
        CnTitle: 'list',
        EnTitle: '',
        requireAuth: false,
    },
    component: resolve => require.ensure(['./pages/list.vue'], require => require(['./pages/list.vue'], resolve), 'pages/list')
}, {
    path: '/content',
    name: 'content',
    meta: {
        CnTitle: 'content',
        EnTitle: '',
        requireAuth: false,
    },
    component: resolve => require.ensure(['./pages/content.vue'], require => require(['./pages/content.vue'], resolve), 'pages/content')
}, {
    path: '/login',
    name: 'login',
    meta: {
        CnTitle: 'login',
        EnTitle: '',
        requireAuth: false,
    },
    component: resolve => require.ensure(['./pages/login.vue'], require => require(['./pages/login.vue'], resolve), 'pages/login')
}];
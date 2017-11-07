/**
 * Application entry.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store' //引入vuex状态管理
import title from './services/title'
import routes from './routes'
import '../element-ui/lib/theme-default/index.css' //element-ui组件样式
import Elementui from '../element-ui/lib/index' //element-ui组件
// import './scss/vendors/pace/pace.css' //加载页面的时候的等待
// import './scss/app.scss' //全部scss
import axios from 'axios'
import * as types from './store/types'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import $ from 'jquery'

import VueTruncate from 'vue-truncate-filter' //文字省略

let Base64 = require('js-base64').Base64;
// import 'jquery'//引入jquery
// import VueCoreImageUpload  from 'vue.core.image.upload'; //vue上传插件

Vue.use(VueRouter);
Vue.use(Elementui);
Vue.use(VueTruncate);
// Vue.use(BootstrapVue);

// 将axios挂载到prototype上，在组件中可以直接使用this.$ajax访问
Vue.prototype.$ajax = axios;

//将createSocket挂载到prototype上，在组件中可以直接使用this.createSocket访问
// Vue.prototype.createSocket =function (uri) {
//     // console.log("B")
//     var sock = new WebSocket(uri);
//     window.$socket = sock;
//     console.log("window.$socket",window.$socket);
//     sock.onopen = function () {
//         if (sock.readyState == 1) {
//             console.log('===user register===', "全局可调用客户端连接成功");
//         } else {
//             console.log('===user register===', "全局可调用客户端连接失败");
//         }
//     }
//     //监听websocket事件
//     // sock.onmessage = function (res) {
//     //     console.log(res)
//     //     console.log("全局,base64哈哈哈啦啦啦", Base64.decode(res.data))
//     // }
// };
// Vue.prototype.$echarts = echarts;
// window.$socket = null;

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'));
}
const router = new VueRouter({
    routes
});
//路由拦截：利用beforeEach()对路由进行判断
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (localStorage.getItem('token') !== null) { // 通过获取当前的token是否存在
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
})

router.afterEach(transition => {

    // if (typeof transition.meta !== 'undefined' && typeof transition.meta !== 'undefined') {
    //     //需要根据当前语言环境设置对应标题，中文CnTitle,英文EnTitle
    //     title(transition.meta.CnTitle);
    // }

});

const app = new Vue({
    store,
    router
}).$mount('#app');

export default router;
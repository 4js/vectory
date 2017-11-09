/**
 *Created by macfeng on 17/10/10.
 *
 * ajax全局配置
 *
 */
import axios from 'axios'
import router from '../bootstrap'
import * as types from '../store/types'
import store from '../store/index'
import qs from 'qs' //查询字符串解析和stringifying库添加了一些安全，查询字符串解析器支持嵌套数组,深度的限制
import * as _ from '../scss/utils/tool'
import { Loading, Message } from 'element-ui'
// axios 配置
axios.defaults.timeout = 5000; //响应时间
// axios.defaults.headers.common['X-Access-Token'] =token;   //用户token
axios.defaults.headers.post['Content-Type'] = 'app/json'; //配置请求头
axios.defaults.headers.post['X-App-Id'] = 'h1:1.0'; //标识客户端版本
axios.defaults.headers.get['Content-Type'] = 'app/json'; //配置请求头
axios.defaults.headers.get['X-App-Id'] = 'h5:1.0'; //标识客户端版本
axios.defaults.headers.delete['Content-Type'] = 'app/json'; //配置请求头
axios.defaults.headers.delete['X-App-Id'] = 'h1:1.0'; //标识客户端版本
axios.defaults.headers.put['Content-Type'] = 'app/json'; //配置请求头
axios.defaults.headers.put['X-App-Id'] = 'h1:1.0'; //标识客户端版本
// axios.defaults.headers.common['X-App-Id'] = 'h5:1.0 ';
console.log(axios.defaults.headers);
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
axios.defaults.baseURL = 'http://www.baidu.com/';
//当实例创建时设置默认配置
var instance = axios.create({
    baseURL: 'http://www.baidu.com/'
});

// 实例创建后默认设置改变
// instance.defaults.headers.common['X-Access-Token'] = token;
//POST传参序列化
// var token = window.localStorage.getItem('token');

//http request 拦截器
axios.interceptors.request.use((config) => {
    //发送请求之前做某件事
    if (config.method === 'post' || config.method === 'put' || config.method === 'get' || config.method === 'delete') {

        config.data = JSON.stringify(config.data);
    }
    //劫持所有Ajax请求，如果这里有一个token在本地存储里面,它将会附加到一个名为x-access-token的Header里面
    if (localStorage.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.common['X-Access-Token'] = localStorage.token;
        config.headers.common['X-App-Id'] = 'h1:1.0';
    }
    return config;
}, (error) => {
    alert('错误参数');
    return Promise.reject(error);
});

//http response 拦截器:返回状态判断（添加响应拦截器）
axios.interceptors.response.use(
    response => {
        // 响应成功关闭loading
        // loadinginstace.close()
        // if (response.data.code === 920) {
        //     // 920 说明 token 验证失败
        //     // 可以直接跳转到登录页面，重新登录获取 token
        //     // store.commit(types.LOGOUT);
        //     Message.error({
        //         message: '登录失效，请退出重新登录'
        //     })
        //     router.replace({
        //         path: '/login' ,
        //         query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //     })
        //     console.log("lallal")
        // } else {
        //     // do something
        // }
        return response;
    },
    error => {
        if (error.response) {
            if (error.response.data.code && error.response.data.code === 500) {
                // 920 说明 token 验证失败
                // 可以直接跳转到登录页面，重新登录获取 token
                location.href = '/login'
                console.log("lallal")
            } else {
                // do something
            }
        }
        return Promise.reject(error) // 返回接口返回的错误信息
    });

//返回有个promise（发送post请求）
// export function fetch(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, params)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err);
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }

// export default {
//     /**
//      * 用户登录
//      */
//     Login(params) {
//         return fetch('/users/api/userLogin', params)
//     },
//
//     /**
//      * 用户注册
//      */
//     Regist(params) {
//         return fetch('/api/core/auth/register', params)
//     },
//
//     /**
//      * 发送注册验证码
//      */
//     RegistVerifiCode(tellphone) {
//         return fetch('POST /api/core/auth/register/email', {tellphone: tellphone})
//     },
//
//     /**
//      * 获取用户信息
//      */
//     UserInfo(id) {
//         return fetch('/users/api/userInfo', {userId: id})
//     },
// }
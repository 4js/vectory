<template>
    <div>
        <div class="logo">
            <img src="https://cn.vuejs.org/images/logo.png" alt="">
        </div>
        <h2>Vectory</h2>
        <h3>This is an app, established of Vue Framework.</h3>
        <h4>if you have some questions, please contact me!</h4>
        <div class="nav">
            <h4>router nav example:</h4>
            <ul>
                <li><router-link to="/login">login</router-link></li>
                <li><router-link to="/list">list</router-link></li>
                <li><router-link to="/content">content</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    //同步加载
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    // import utils from '../services/utils'//utils工具集
    import async from 'async' //async异步框架

    export default {
        name: 'home',
        data () {
            return {

            }
        },
        mounted () {
        },
    }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss">
    h2,h3,h4{
        text-align: center;
        line-height: 1.5;
    }
    .logo{
        text-align: center;
        margin-top: 50px;
        img{
            width: 200px;
            height: auto;
        }
    }
    .nav{
        width: 300px;
        margin:0 auto;
    }
</style>
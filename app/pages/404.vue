<template>
    <p style="font-size:30px;text-align: center;padding-top:300px;">404 页面不存在 o(╯□╰)o</p>
</template>

<script>
    //同步加载
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import utils from '../services/utils'//utils工具集
    import async from 'async' //async异步框架

    export default {
        name: '404',
        data () {
            return {

            }
        },
        mounted () {
            utils.bodyRender('#f4f6f9');//背景色
        },
    }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss">

</style>
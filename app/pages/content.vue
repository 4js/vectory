<template>
    <div>   
        <h4>这是内容详情页面</h4>
        <div class="nav">
            <h2>router nav example:</h2>
            <ul>
                <li><router-link to="/login">login</router-link></li>
                <li><router-link to="/list">list</router-link></li>
                <li><router-link to="/home">home</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    //同步加载
    import Vue from 'vue'
    import VueResource from 'vue-resource'

    export default {
        name: 'content',
        data () {
            return {
                title:'内容页'
            }
        },
        mounted () {
        },
    }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss">
    .nav{
        width: 300px;
        margin:0 auto;
    }
</style>
<template>
  <div class="page-header" v-if="route.path !== '/dashboard'">
    <a-breadcrumb>
      <a-breadcrumb-item><router-link to="/dashboard">首页</router-link></a-breadcrumb-item>
      <a-breadcrumb-item v-for="(item, index) in route.matched" :key="index" style="line-height:64px;">
        <router-link v-if="index !== route.matched.length - 1" :to="item.path">{{item.name}}</router-link>
        <span v-else>{{item.name}}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "PageHeader",
  props: {
    route: {
      type: Object
    }
  }
};
</script>

<style>
</style>

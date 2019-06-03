<template>
  <div class="page-header">
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item v-for="(item, index) in route.matched" :key="index">
        <router-link :to="item.path">{{item.name}}</router-link>
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
.page-header {
  margin-bottom: 30px;
}
</style>

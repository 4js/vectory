<template>
  <div id="app">
    <a-spin :spinning="loading"></a-spin>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    loadingStart () {
      /* eslint-disable */
      console.log(1)
      this.loading = true
    },
    loadingEnd () {
      this.loading = false
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

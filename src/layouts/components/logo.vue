<template>
  <div class="logo">
    <img src="../../assets/img/nuxt-emoji-white.png">
    <span v-if="!collapsed">大数据决策系统</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  height: 32px;
  text-align: center;
  margin: 16px;
  img {
    height: 32px;
  }
  span{
    color: #eee;
    padding-left: 15px;
    line-height: 30px;
  }
}
</style>

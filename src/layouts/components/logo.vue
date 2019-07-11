<template>
  <div class="logo">
    <img v-if="collapsed" src="../../assets/img/logo-mini.png">
    <img v-else src="../../assets/img/logo.png">
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
<style lang="less" scoped>
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

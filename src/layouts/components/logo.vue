<template>
    <div class="logo">
        <img v-if="collapsed" src="../../assets/img/logo-light.png" />
        <img v-else src="../../assets/img/goke.png" />
    </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
    .logo {
        height: 32px;
        text-align: center;
        margin: 16px;
        img{
            height: 32px;
        }
    }
</style>

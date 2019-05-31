<template>
    <div class="user-wrapper">
        <a-search></a-search>
        <a-dropdown :trigger="['click']">
            <a-icon class="info-icon" type="mail" />
            <a-menu slot="overlay">
            <a-menu-item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">3rd menu item</a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>
<script>
import ASearch from './search'
export default {
  data(){
    return {
    }
  },
  components: { ASearch }
}
</script>
<style lang="scss" scoped>
    .info-icon{
        cursor: pointer;
    }
</style>

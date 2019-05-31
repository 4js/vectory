<template>
  <a-layout id="basic-layouts" :style="{ height: '100vh' }">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <a-logo></a-logo>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row>
            <a-col class="gutter-row" :span="12">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="()=> collapsed = !collapsed"
                />
            </a-col>
            <a-col class="gutter-row" :span="12" style="text-align: right; padding-right: 24px;">
                <a-user></a-user>
            </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import ALogo from './components/logo'
import AUser from './components/user'
export default {
  data(){
    return {
      collapsed: false,
    }
  },
  components: { ALogo, AUser }
}
</script>
<style lang="scss" scoped>
#basic-layouts{
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
        &:hover{
            color: #1890ff; 
        }
    }
} 
</style>

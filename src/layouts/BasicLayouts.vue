<template>
  <a-layout id="basic-layouts" :style="{ height: '100vh' }">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <a-logo :collapsed="collapsed"></a-logo>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="appstore" /><span>资源管理</span></span>
            <a-menu-item key="/resource/cluster">
                <router-link to="/resource/cluster">集群全貌</router-link>
            </a-menu-item>
            <a-menu-item key="/resource/server">
                <router-link to="/resource/server">服务器</router-link>
            </a-menu-item>
            <a-menu-item key="/resource/disk">
                <router-link to="/resource/disk">硬盘</router-link>
            </a-menu-item>
            <a-menu-item key="/resource/device">
                <router-link to="/resource/device">设备组</router-link>
            </a-menu-item>
            <a-menu-item key="/resource/pool">
                <router-link to="/resource/pool">存储池</router-link>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="setting" /><span>存储服务</span></span>
            <a-menu-item key="6">块存储</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="setting" /><span>数据安全</span></span>
            <a-menu-item key="7">秘钥管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub5">
            <span slot="title"><a-icon type="setting" /><span>基础配置</span></span>
            <a-menu-item key="8">集群参数管理</a-menu-item>
        </a-sub-menu>
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
          <a-page-header :route="$route"></a-page-header>
          <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import ALogo from './components/logo'
import AUser from './components/user'
import APageHeader from '../components/PageHeader'
export default {
  data(){
    return {
      collapsed: false,
    }
  },
  components: { ALogo, AUser, APageHeader }
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

<template>
  <a-layout id="basic-layouts" :style="{ height: '100vh' }">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <a-logo :collapsed="collapsed"></a-logo>
      <a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys" :openKeys="openKeys" @select="menuChange">
        <a-menu-item key="/dashboard">
          <router-link to="/dashboard">
            <a-icon type="dashboard" />
            <span>概览</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="/resource" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="smile"/>
            <span>客户管理</span>
          </span>
          <a-menu-item key="/resource/cluster">
            <router-link to="/resource/cluster">个人管理</router-link>
          </a-menu-item>
          <a-menu-item key="/resource/server">
            <router-link to="/resource/server">常旅客管理</router-link>
          </a-menu-item>
          <a-menu-item key="/resource/disk">
            <router-link to="/resource/disk">Vip客户管理</router-link>
          </a-menu-item>
          <a-menu-item key="/resource/device">
            <router-link to="/resource/device">黑名单管理</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/config5" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="shopping-cart" />
            <span>订单管理</span>
          </span>
          <a-menu-item key="/config/parameter11">
            <router-link to="/config/parameter">个人订单</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter12">
            <router-link to="/config/parameter">团体订单</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter13">
            <router-link to="/config/parameter">内部订单</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/config8" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="money-collect" />
            <span>财务管理</span>
          </span>
          <a-menu-item key="/config/parameter16">
            <router-link to="/config/parameter">财务报表</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter17">
            <router-link to="/config/parameter">清算中心</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter18">
            <router-link to="/config/parameter">坏账管理</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/storage" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="rocket" />
            <span>机队管理</span>
          </span>
          <a-menu-item key="/storage/block">
            <router-link to="/storage/block">客机管理</router-link>
          </a-menu-item>
          <a-menu-item key="/storage/block2">
            <router-link to="/storage/block">货机管理</router-link>
          </a-menu-item>
          <a-menu-item key="/storage/block3">
            <router-link to="/storage/block">引进计划</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/protect" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="radar-chart" />
            <span>航班管理</span>
          </span>
          <a-menu-item key="/protect/key">
            <router-link to="/protect/key">国内航班</router-link>
          </a-menu-item>
          <a-menu-item key="/protect/key2">
            <router-link to="/protect/key">国际航班</router-link>
          </a-menu-item>
          <a-menu-item key="/protect/key3">
            <router-link to="/protect/key">包机航班</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/config" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="disconnect" />
            <span>航线管理</span>
          </span>
          <a-menu-item key="/config/parameter">
            <router-link to="/config/parameter">航班计划</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter2">
            <router-link to="/config/parameter">航线管理</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/config2" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="user" />
            <span>人员管理</span>
          </span>
          <a-menu-item key="/config/parameter3">
            <router-link to="/config/parameter">客舱服务部</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter4">
            <router-link to="/config/parameter">飞行中队</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter5">
            <router-link to="/config/parameter">机务维修部</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter10">
            <router-link to="/config/parameter">地面服务部</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter9">
            <router-link to="/config/parameter">信息管理部</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/config3" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="message" />
            <span>服务管理</span>
          </span>
          <a-menu-item key="/config/parameter6">
            <router-link to="/config/parameter">客户投诉</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter7">
            <router-link to="/config/parameter">客户建议</router-link>
          </a-menu-item>
          <a-menu-item key="/config/parameter8">
            <router-link to="/config/parameter">业务受理</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; minHeight: '100vh'">
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
      <a-layout-content
        :style="{ margin: '24px 16px' }"
      >
        <a-page-header :route="$route"></a-page-header>
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import ALogo from "./components/logo";
import AUser from "./components/user";
import APageHeader from "../components/PageHeader";
export default {
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
      openKeys: []
    };
  },
  methods: {
    /*
     *  select meun item
     */
    menuChange(v) {
      this.selectedKeys = [v.key];    
    },
    /*
     *  click dropmenu 
     */
    itemChange (v) {
      if (this.openKeys[0] === v.key) {
        this.openKeys = []
      } else {
        this.openKeys = [v.key];
      }
    }
  },
  mounted() {
    this.selectedKeys = [this.$route.matched[1].path];
    this.openKeys = [this.$route.matched[0].path];
  },
  components: { ALogo, AUser, APageHeader }
};
</script>
<style lang="less" scoped>
#basic-layouts {
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>

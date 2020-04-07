<template>
  <a-layout id="basic-layouts" :style="{ height: '100vh' }">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <a-logo :collapsed="collapsed"></a-logo>
      <a-menu
        theme="dark"
        mode="inline"
        :selectedKeys="selectedKeys"
        :openKeys="openKeys"
        @select="menuChange"
      >
        <a-menu-item key="/dashboard">
          <router-link to="/dashboard">
            <a-icon type="dashboard" />
            <span>概览</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="/custom" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="smile" />
            <span>客户管理</span>
          </span>
          <a-menu-item key="/custom/common">
            <router-link to="/custom/common">个人管理</router-link>
          </a-menu-item>
          <a-menu-item key="/custom/flyer">
            <router-link to="/custom/flyer">常旅客管理</router-link>
          </a-menu-item>
          <a-menu-item key="/custom/vip">
            <router-link to="/custom/vip">Vip客户管理</router-link>
          </a-menu-item>
          <a-menu-item key="/custom/black">
            <router-link to="/custom/black">黑名单管理</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/order" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="shopping-cart" />
            <span>订单管理</span>
          </span>
          <a-menu-item key="/order/one">
            <router-link to="/order/one">个人订单</router-link>
          </a-menu-item>
          <a-menu-item key="/order/group">
            <router-link to="/order/group">团体订单</router-link>
          </a-menu-item>
          <a-menu-item key="/order/inside">
            <router-link to="/order/inside">内部订单</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/financial" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="money-collect" />
            <span>财务管理</span>
          </span>
          <a-menu-item key="/financial/report">
            <router-link to="/financial/report">财务报表</router-link>
          </a-menu-item>
          <a-menu-item key="/financial/settle">
            <router-link to="/financial/settle">清算中心</router-link>
          </a-menu-item>
          <a-menu-item key="/financial/debt">
            <router-link to="/financial/debt">坏账管理</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/plane" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="rocket" />
            <span>机队管理</span>
          </span>
          <a-menu-item key="/plane/visitor">
            <router-link to="/plane/visitor">客机管理</router-link>
          </a-menu-item>
          <a-menu-item key="/plane/freight">
            <router-link to="/plane/freight">货机管理</router-link>
          </a-menu-item>
          <a-menu-item key="/plane/entrance">
            <router-link to="/plane/entrance">引进计划</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/flight" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="radar-chart" />
            <span>航班管理</span>
          </span>
          <a-menu-item key="/flight/domestic">
            <router-link to="/flight/domestic">国内航班</router-link>
          </a-menu-item>
          <a-menu-item key="/flight/internal">
            <router-link to="/flight/internal">国际航班</router-link>
          </a-menu-item>
          <a-menu-item key="/flight/wrap">
            <router-link to="/flight/wrap">包机航班</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="/airline" @titleClick="itemChange">
          <span slot="title">
            <a-icon type="disconnect" />
            <span>航线管理</span>
          </span>
          <a-menu-item key="/airline/city">
            <router-link to="/airline/city">城市管理</router-link>
          </a-menu-item>
          <a-menu-item key="/airline/plan">
            <router-link to="/airline/plan">航班计划</router-link>
          </a-menu-item>
          <a-menu-item key="/airline/line">
            <router-link to="/airline/line">航线管理</router-link>
          </a-menu-item>
        </a-sub-menu>
        <!-- <a-sub-menu key="/config2" @titleClick="itemChange">
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
        </a-sub-menu> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; minHeight: '100vh'">
        <a-row>
          <a-col class="gutter-row" :span="12" style="display: flex;height:64px;line-height:64px;">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="toggle"
            />
            <a-page-header :route="$route"></a-page-header>
          </a-col>
          <a-col class="gutter-row" :span="12" style="text-align: right; padding-right: 24px;">
            <a-user></a-user>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import ALogo from "./components/logo";
import AUser from "./components/user";
import APageHeader from "./components/pageHeader";
import { triggerWindowResizeEvent } from "../utils/util";
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
    toggle() {
      this.collapsed = !this.collapsed;
      triggerWindowResizeEvent();
    },
    /*
     *  click dropmenu
     */
    itemChange(v) {
      if (this.openKeys[0] === v.key) {
        this.openKeys = [];
      } else {
        this.openKeys = [v.key];
      }
    }
  },
  mounted() {
    // 点击2级菜单
    if (this.$route.matched.length > 2) {
      this.selectedKeys = [this.$route.matched[2].path];
      this.openKeys = [this.$route.matched[1].path];
    } else {
      this.selectedKeys = [this.$route.matched[1].path];
      this.openKeys = [this.$route.matched[1].path];
    }
    triggerWindowResizeEvent();
  },
  components: { ALogo, AUser, APageHeader }
};
</script>
<style lang="less">
#basic-layouts {
  .trigger {
    font-size: 18px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>

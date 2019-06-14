<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a href="https://pro.loacg.com/docs/getting-started" target="_blank">
        <span class="action">
          <a-icon type="question-circle-o"></a-icon>
        </span>
      </a>
      <!-- <notice-icon class="action"/> -->
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar class="avatar" icon="user" size="small"/>
          <span>{{ username }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <router-link to="/user/center">
              <a-icon type="user"/>
              <span>个人中心</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="1">
            <router-link to="/user/center">
              <a-icon type="setting"/>
              <span>账户设置</span>
            </router-link>
          </a-menu-item>
          <a-menu-divider/>
          <a-menu-item key="3">
            <a href="javascript:;" @click="logout">
              <a-icon type="logout"/>
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
// import loading from '../../mixins/loading'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      username: "admin"
    };
  },
  methods: {
    logout () {
      /* eslint-disable */
      // console.log(this.rootParent)
      this.logoutSuccess()
    },
    logoutSuccess () {
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '成功',
          description: '退出登录成功，欢迎再来'
        })
        this.$router.push('/login')
        // this.rootParent.loadingEnd()
      }, 3000)
    }
  }
};
</script>
<style lang="scss" scoped>
.user-wrapper {
  float: right;
  height: 100%;

  .action {
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    color: rgba(0, 0, 0, 0.65);

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }

    .avatar {
      margin: 20px 8px 20px 0;
      color: #1890ff;
      //   background: hsla(0, 0%, 100%, 0.85);
      vertical-align: middle;
    }

    .icon {
      font-size: 16px;
      padding: 4px;
    }
  }
}
</style>

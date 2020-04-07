<template>
  <div class="login-wrapper">
    <div class="logo-img"><img src="../../assets/img/logo.png" alt=""></div>
    <div class="login-box">
      <a-form
        id="formLogin"
        class="user-layout-login"
        ref="formLogin"
        :form="form"
        @submit="handleSubmit"
      >
        <h2 class="login-tit">Sichuan Airlines BigData Plat</h2>
        <a-form-item>
          <a-input
            size="large"
            type="text"
            placeholder="username"
            v-decorator="[
              'username',
              {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }], validateTrigger: 'change'}
            ]"
          >
            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            type="password"
            autocomplete="false"
            placeholder="password"
            v-decorator="[
              'password',
              {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
            ]"
          >
            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>
        <!-- <a-form-item>
          <a-checkbox v-decorator="['rememberMe']" style="color: #fff;">自动登录</a-checkbox>
          <router-link
            :to="{ name: 'recover', params: { user: 'aaa'} }"
            class="forge-password"
            style="float: right;color: #fff;"
          >忘记密码</router-link>
        </a-form-item> -->

        <a-form-item style="margin-top:40px">
          <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="login-button"
            :loading="state.loginBtn"
            :disabled="state.loginBtn"
          >登录</a-button>
        </a-form-item>

        <!-- <div class="user-login-other">
          <router-link class="register" :to="{ name: 'register' }">注册账户</router-link>
        </div> -->
      </a-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/api';
export default {
  data () {
    return {
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  created () {
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state
      } = this
      state.loginBtn = true
      validateFields(['username', 'password'], { force: true }, async (err, values) => {
        if (!err) {
          const {username, password} = values;
          console.log(values);
          // const res = await login(values);
          // console.log(res);
          // loginParams.password = md5(values.password)

          if (username === 'admin' && password === 'admin') {
            this.loginSuccess()
          } else {
            this.$notification.error({
              message: '失败',
              description: '登录失败'
            })
          }
          state.loginBtn = false
          // Login(loginParams)
          //   .then((res) => this.loginSuccess(res))
          //   .catch(err => this.requestFailed(err))
          //   .finally(() => {
          //     state.loginBtn = false
          //   })
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    loginSuccess () {
      const timeFix = '下午好'
      this.$router.push('/')
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix}，欢迎回来`
        })
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrapper{
  width: 100%;
  min-height: 100%;
  background: #f0f2f5 url(../../assets/img/bg2.jpg);
  // background-size: cover;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  .logo-img{
    position: absolute;
    top: 30px;
    left: 30px;
    img{
      height: 45px;
    }
  }
  .login-box{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    width: 350px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    .ant-row input{
      background: none !important;
      border-radius: 0;
      border-top: none;
      border-right: none;
      border-left: none;
      &:focus{
        box-shadow: none;
      }
    }
  }
}
.user-layout-login {
  width: 280px;
  height: 250px;
  .login-tit{
    color: #fff;
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
  }
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
      color: #fff;
    }
  }
}
</style>


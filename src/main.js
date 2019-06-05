import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import { setDocumentTitle } from './utils/domUtils'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  setDocumentTitle(`${to.meta.title}-分布式存储系统`)
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

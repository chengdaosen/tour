import Vue from 'vue'
import App from './App.vue'
import 'windi.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import httpRequest from '@/utils/httpRequest'
import store from '@/store'
import '@/mock'
import animated from 'animate.css'
Vue.use(animated)
Vue.config.productionTip = false
Vue.use(ElementUI)

// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法

new Vue({
  //注册路由
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')




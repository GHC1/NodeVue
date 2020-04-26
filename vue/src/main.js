import Vue from 'vue'
import App from './layouts/App.vue'
import VueRouter from 'vue-router'
import './assets/css/base.css'//引入通用的css样式

import store from './plugins/vuex'

//引入服务配置模块
import server from './config/server'
Vue.prototype.$baseUrl = server.baseUrl//把暴露出的地址作为实例属性绑定到vue中
import './plugins/axios'
import router from './plugins/router'
Vue.use(VueRouter)
Vue.config.productionTip = false

let vm = new Vue({
  // data:{
  //   loging:false,
  //   footer:true,
  //   header:true
  // },
  router,
  render: h => h(App),
  store
}).$mount('#app')
export default vm;



import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from "axios"
import store from "./store"
import {
  Indicator
} from 'mint-ui';
Vue.use(MintUI)

Vue.prototype.$axios = axios;
//请求拦截
axios.interceptors.request.use(config => {
  //加载动画
  Indicator.open();
  return config;
}, error => {
  return Promise.reject(error);
})
//响应拦截
axios.interceptors.response.use(response => {
  //关闭动画
  Indicator.close();
  return response;
  //错误提醒
}, error => {
  return Promise.reject(error);
})



import VueResource from 'vue-resource'
Vue.use(VueResource)

import {
  setCookie,
  getCookie,
  delCookie
} from "./assets/js/cookie"

Vue.prototype.$Cookie = {
  setCookie,
  getCookie,
  delCookie
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
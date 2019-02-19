// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App.vue'

import router from './router'
import store from './Store'
// 引入路由
Vue.config.productionTip = false

Vue.use(vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  store,
  components: { App },
  template: '<App/>'
})

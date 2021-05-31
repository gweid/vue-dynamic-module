import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadDynamicModule from './dynamicModules'

Vue.config.productionTip = false

const _VUE_INSTANCE_ = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 配置开发环境模块化编译
loadDynamicModule(_VUE_INSTANCE_)
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入 normalize.css
import '@/common/stylus/normalize.css'
// 引入第三方字体
import '@/common/icon/iconfont.css'
// 引入 vuex
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from './untils/requset'
import Component from '../src/components/index'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import './permission/index'
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(Component)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

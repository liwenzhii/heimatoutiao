import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import Component from '../src/components/index'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

Vue.use(ElementUI)
Vue.use(Component)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

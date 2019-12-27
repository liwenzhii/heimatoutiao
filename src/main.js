import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from './untils/requset'
import Component from '../src/components/index'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import './permission/index'
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(Component)

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')

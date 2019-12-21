import headers from '../components/headers/headers.vue'
import slidebar from '../components/silebar/slide/index.vue'
import common from '../components/common/common.vue'

export default {
  install (Vue) {
    Vue.component('headers', headers)
    Vue.component('slidebar', slidebar)
    Vue.component('common', common)
  }
}

import headers from '../components/headers/headers.vue'
import slidebar from '../components/silebar/slide/index.vue'

export default {
  install (Vue) {
    Vue.component('headers', headers)
    Vue.component('slidebar', slidebar)
  }
}

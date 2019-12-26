import headers from '../components/headers/headers.vue'
import slidebar from '../components/silebar/slide/index.vue'
import common from '../components/common/common.vue'
import Publish from '../components/publish/cover-image.vue'

export default {
  install (Vue) {
    Vue.component('headers', headers)
    Vue.component('slidebar', slidebar)
    Vue.component('common', common)
    Vue.component('cover-image', Publish)
  }
}

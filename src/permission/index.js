import router from '../router/index'
import nprogress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'
router.beforeEach(function (to, form, next) {
  nprogress.start()
  if (to.path.startsWith('/home')) {
    // alert(s2222)
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  setTimeout(() => {
    nprogress.done()
  }, 300)
})

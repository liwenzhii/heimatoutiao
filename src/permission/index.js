import router from '../router/index'

router.beforeEach(function (to, form, next) {
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

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/router/routes'
import Nprogress from 'nprogress'
import store from '../store'

Nprogress.inc(0.2)
Nprogress.configure({ showSpinner: false })

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = store.getters['app/token']
  Nprogress.start()
  if (to.matched.length === 0) {
    next({ name: '404' })
  } else {
    if (!token && to.name !== 'login') {
      next({ name: 'login' })
    } else if (token && to.name === 'login') {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  }
})

router.afterEach((to, from, failure) => {
  const { meta: { title = 'vue3-atdv2-admin' } } = to
  document.title = title
  Nprogress.done()
})

export default router

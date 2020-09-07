import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import Nprogress from 'nprogress'

Nprogress.inc(0.2)
Nprogress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const token = '2323'

router.beforeEach((to, from, next) => {
  Nprogress.start()
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

router.afterEach((to, from, failure) => {
  Nprogress.done()
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import Nprogress from 'nprogress'

Nprogress.inc(0.2)
Nprogress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from, failure) => {
  Nprogress.done()
})

export default router

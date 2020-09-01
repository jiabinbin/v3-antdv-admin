import router from './router'
import store from './store'
import antd from 'ant-design-vue'
// import 'ant-design-vue/components/style.js'
import 'ant-design-vue/dist/antd.css'
import '@/plugins/icons'
import app from '@/app'
import 'nprogress/nprogress.css'
// import './antd-variables.less'
// console.log(antd)
app
  .use(router)
  .use(store)
  .use(antd)

// console.log('app ===>  ', app)
// export const app
router.isReady().then(() => app.mount('#app'))

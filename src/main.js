import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import './antd-variables.less'
import '@/plugins/icons'
import '@/plugins/cusComponents'
import app from '@/app'
import 'nprogress/nprogress.css'
app
  .use(router)
  .use(store)
  .use(antd)

router.isReady().then(() => app.mount('#app'))

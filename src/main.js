import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/components/style.js'
import '@/plugins/icons'
import app from '@/app'
// import './antd-variables.less'
// console.log(antd)

app.use(store)
  .use(router)
  .use(antd)
  .mount('#app')
// console.log('app ===>  ', app)
// export const app

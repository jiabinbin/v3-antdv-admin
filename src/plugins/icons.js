import app from '@/app'
import * as allIcons from '@ant-design/icons-vue'

// console.log(allIcons)
Object.keys(allIcons).forEach(name => {
  app.component(name, allIcons[name])
})

<template>
  <a-config-provider :locale="zhCN">
    <router-view/>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import bootstrap from '@/utils/bootstrap'
export default {
  setup () {
    bootstrap()
    return {
      zhCN
    }
  }
}
</script>

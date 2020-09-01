<template>
  <a-config-provider :locale="zhCN">
    <router-view>
    </router-view>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import bootstrap from '@/utils/bootstrap'
import { defineComponent } from 'vue'
import { reactive, ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { watch } from '@vue/runtime-core'

export default defineComponent({
  setup () {
    bootstrap()
    let lastRouteIndex = 0
    const route = reactive(useRoute())
    const transition = ref('right-slide-in')

    watch(() => route.meta.index,
      (index) => {
        if (index >= lastRouteIndex) {
          transition.value = 'right-slide-in'
        } else {
          transition.value = 'left-slide-in'
        }
        lastRouteIndex = index
      },
      { flush: 'pre' })
    return {
      zhCN,
      transition
    }
  }
})
</script>

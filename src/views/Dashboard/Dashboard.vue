<template>
  <PageWrapper
    title="Dashboard页"
  >
    <template v-slot:contentExtra>
      asdfafaasdfafaasdfafa
    </template>
    <template v-slot:footer>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="Details" />
        <a-tab-pane key="2" tab="Rule" />
      </a-tabs>
    </template>
    <a-card>
      <div>Dashboard</div>
      <a-space>
        <a-button type="primary" @click="turnTo('levelA1A')">跳转1</a-button>
        <a-button type="primary" @click="turnTo('formTpl')">跳转2</a-button>
        <a-button type="primary" @click="turnTo('levelB2')">跳转3</a-button>
        <a-button type="primary" @click="turnTo('hideMenuPage')">这个页面不在菜单里</a-button>
      </a-space>
      <div>
        <p>Effect: {{test}}</p>
        <a-button @click="toggle">AAA</a-button>
      </div>
    </a-card>
  </PageWrapper>
</template>

<script>
import { useRouter } from 'vue-router'
import { useToggle } from '@ant-design-vue/use'
export default {
  name: 'Dashboard',
  setup () {
    const router = useRouter()
    const turnTo = routeName => {
      router.push({
        name: routeName
      })
    }
    const [test, { toggle }] = useToggle()
    return {
      test,
      turnTo,
      toggle
    }
  }
}
</script>

<style scoped lang="less">
</style>

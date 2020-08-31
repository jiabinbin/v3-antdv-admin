<template>
  <div>
    <div>Dashboard</div>
    <a-space>
      <a-button type="primary" @click="turnTo('page2_1_a')">跳转1</a-button>
      <a-button type="primary" @click="turnTo('formTpl')">跳转2</a-button>
      <a-button type="primary" @click="turnTo('page2_2')">跳转3</a-button>
    </a-space>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Dashboard',
  setup () {
    const router = useRouter()
    const turnTo = routeName => {
      router.push({
        name: routeName
      })
    }
    return {
      turnTo
    }
  }
}
</script>

<style scoped>

</style>

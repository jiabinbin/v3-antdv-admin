<template>
  <PageWrapper
    title="Dashboard页"
    sub-title="dashboard副标题"
  >
    <template v-slot:extra>
      <a-button key="3">
        Operation
      </a-button>
      <a-button key="2">
        Operation
      </a-button>
      <a-button key="1" type="primary">
        Primary
      </a-button>
    </template>
    <a-descriptions size="small" :column="3">
      <a-descriptions-item label="Created">
        Lili Qu
      </a-descriptions-item>
      <a-descriptions-item label="Association">
        <a>421421</a>
      </a-descriptions-item>
      <a-descriptions-item label="Creation Time">
        2017-01-10
      </a-descriptions-item>
      <a-descriptions-item label="Effective Time">
        2017-10-10
      </a-descriptions-item>
      <a-descriptions-item label="Remarks">
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
      </a-descriptions-item>
    </a-descriptions>
    <div>Dashboard</div>
    <a-space>
      <a-button type="primary" @click="turnTo('page2_1_a')">跳转1</a-button>
      <a-button type="primary" @click="turnTo('formTpl')">跳转2</a-button>
      <a-button type="primary" @click="turnTo('page2_2')">跳转3</a-button>
    </a-space>
  </PageWrapper>
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

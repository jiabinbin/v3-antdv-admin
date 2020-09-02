<template>
  <a-breadcrumb class="breadcrumb">
    <template
      v-for="(it, id) in breadcrumbList"
      :key="id"
    >
      <a-breadcrumb-item>
        {{it.meta.title}}
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    breadcrumbList: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped lang="less">

</style>

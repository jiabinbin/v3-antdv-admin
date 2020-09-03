<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(it, id) in breadcrumbList" :key="id">
      {{ it.meta.title }}
    </a-breadcrumb-item>
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

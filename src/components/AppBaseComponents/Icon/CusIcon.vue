<template>
  <component :is="icon"></component>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CusIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
  }
})
</script>

<style scoped>

</style>

<template>
  <component :is="icon"></component>
</template>
<script>
export default {
  name: 'CusIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
  }
}
</script>

<style scoped>

</style>

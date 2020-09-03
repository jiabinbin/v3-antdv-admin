<script>
import { defineComponent, computed, reactive } from 'vue'
import CusPageHeader from '@/components/Layout/components/PageHeader/PageHeader'
import { useStore } from 'vuex'
import PageHeader from 'ant-design-vue/es/page-header/index'

export default defineComponent({
  name: 'PageWrapper',
  components: {
    CusPageHeader
  },
  props: Object.assign({}, PageHeader.props, {}),
  setup (props, { slots }) {
    const store = useStore()
    const propsState = reactive(props)
    const menuList = computed(() => store.state.app.menuList)
    return () => (
      <CusPageHeader
        {...propsState}
        menuList={menuList.value}
        v-slots={
          slots
        }
      >
        <slot></slot>
      </CusPageHeader>
    )
  }
})
</script>

<style scoped>

</style>

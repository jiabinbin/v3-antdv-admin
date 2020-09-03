<script>
import { defineComponent, computed, reactive } from 'vue'
import CusPageHeader from '@/components/Layout/components/PageHeader/PageHeader'
import { useStore } from 'vuex'
import PageHeader from 'ant-design-vue/es/page-header/index'
import styles from './index.module.less'

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
        class={styles['page-wrapper']}
        {...propsState}
        menuList={menuList.value}
        v-slots={
          slots
        }
      >
        <div class={styles['page-wrapper-content']}>
          <slot></slot>
        </div>
      </CusPageHeader>
    )
  }
})
</script>

<style scoped>

</style>

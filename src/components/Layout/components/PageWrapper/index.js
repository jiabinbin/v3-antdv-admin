import { defineComponent, computed, getCurrentInstance } from 'vue'
import CusPageHeader from '@/components/Layout/components/PageHeader'
import { useStore } from 'vuex'
import PageHeader from 'ant-design-vue/es/page-header/index'
import styles from './index.module.less'
import { getDefaultProps } from '@/components/_tools'

export default defineComponent({
  name: 'PageWrapper',
  components: {
    CusPageHeader
  },
  props: Object.assign({}, PageHeader.props, {
    contentExtra: {
    }
  }),
  setup (props, context) {
    const instance = getCurrentInstance()
    const { ctx } = instance
    const { slots } = context
    const aPageHeaderProps = getDefaultProps(PageHeader.props, ctx)

    const store = useStore()

    const menuList = computed(() => store.state.app.menuList)

    const headerSlots = { ...slots }
    delete headerSlots.default
    return () => (
      <div class={styles['page-header-wrapper']}>
        <CusPageHeader
          class={styles['page-wrapper']}
          {...aPageHeaderProps}
          menuList={menuList.value}
          contentExtra={props.contentExtra}
          v-slots={
            headerSlots
          }
        >
        </CusPageHeader>
        <div
          class={styles['page-wrapper-content']}
        >
          {slots.default()}
        </div>
      </div>
    )
  }
})

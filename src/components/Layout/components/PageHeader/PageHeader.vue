<script>
import { defineComponent, reactive, watch } from 'vue'
import PageHeader from 'ant-design-vue/es/page-header/index'
import { getParentRoute } from '@/components/_tools'
import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import { useRoute } from 'vue-router'
import styles from './index.module.less'

const pageHeaderProps = PageHeader.props
export default defineComponent({
  name: 'CusPageHeader',
  props: Object.assign({}, pageHeaderProps, {
    menuList: {
      type: Array,
      required: true
    }
  }),
  components: {
    Breadcrumb
  },
  setup (props, { slots }) {
    const route = reactive(useRoute())
    const propsState = reactive(props)
    const state = reactive({
      breadcrumbList: [],
      newProps: {}
    })

    const initPageHeader = () => {
      const list = getParentRoute(route.path, propsState.menuList)
      state.breadcrumbList = list
      const title = propsState?.title || list[list.length - 1].meta.title
      const newProps = Object.assign({}, propsState, { title })
      state.newProps = newProps
    }

    watch(() => route.fullPath, () => {
      initPageHeader()
    }, {
      immediate: true
    })
    return () => (
      <div class={styles['cus-page-header']}>
        <Breadcrumb breadcrumbList={state.breadcrumbList}></Breadcrumb>
        <a-page-header
          {...state.newProps}
          class={styles['no-padding-ant-page-header']}
          v-slots={slots}
        >
        </a-page-header>
      </div>
    )
  }
})
</script>

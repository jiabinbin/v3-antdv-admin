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
    },
    contentExtra: {}
  }),
  components: {
    Breadcrumb
  },
  setup (props, { slots }) {
    const route = reactive(useRoute())
    const state = reactive({
      breadcrumbList: [],
      newProps: {}
    })
    const initPageHeader = () => {
      const list = getParentRoute(route.path, props.menuList)
      state.breadcrumbList = list
      const title = props?.title || route.meta.title
      const newProps = Object.assign({}, props, { title })
      state.newProps = newProps
    }

    watch(() => route.fullPath, () => {
      initPageHeader()
    }, {
      immediate: true
    })

    // contentExtra slots
    const { contentExtra, footer } = slots
    // 如果有footer的slots去掉padding-bottom, 如是没有就加padding-bottom
    const clazz = footer ? styles['page-header-no-bottom-padding'] : styles['page-header-padding']
    return () => (
      <div class={clazz}>
        <Breadcrumb breadcrumbList={state.breadcrumbList}></Breadcrumb>
        <a-page-header
          v-slots={
            slots
          }
          {...state.newProps}
          class={styles['no-padding-ant-page-header']}
        >
          {
            contentExtra ? contentExtra() : (
              <div>{props.contentExtra}</div>
            )
          }
        </a-page-header>
      </div>
    )
  }
})

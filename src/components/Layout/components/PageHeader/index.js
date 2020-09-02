import { defineComponent } from 'vue'
import PageHeader from 'ant-design-vue/es/page-header/index'
import { getDefaultProps } from '@/components/_tools'
import Breadcrumb from '@/components/Layout/components/Breadcrumb/Breadcrumb'
import { reactive } from '@vue/reactivity'

const pageHeaderProps = PageHeader.props
export default defineComponent({
  name: 'CusPageHeader',
  props: Object.assign({}, pageHeaderProps, {
  }),
  components: {
    Breadcrumb
  },
  setup (props, content) {
    const propsState = reactive(props)
    const phProps = getDefaultProps(pageHeaderProps, props)
    console.log(phProps)
    const { breadcrumb: { routes } } = propsState
    return () => (
      <a-page-header>
        <Breadcrumb breadcrumbList={routes}></Breadcrumb>
      </a-page-header>
    )
  }
})

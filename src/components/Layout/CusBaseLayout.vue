<template>
  <a-layout class="layout">
    <a-layout-sider
      collapsible
      v-model:collapsed="collapsed"
      :trigger="null"
    >
      <div class="logo"/>
      <MenuList
        :menu-list="menuList"
      />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <span class="trigger" @click="triggerCollapsed">
          <MenuFoldOutlined v-if="!collapsed"/>
          <MenuUnfoldOutlined v-else/>
        </span>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { useBoolean } from '@/hooks/useBoolean/useBoolean'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { computed } from 'vue'
import MenuList from './components/Menu.vue'
import { useStore } from 'vuex'

export default {
  name: 'CusBaseLayout',
  components: {
    // MenuList: () => import('./components/menu.js')
    MenuList,
    MenuFoldOutlined,
    MenuUnfoldOutlined
    // ALayout: Layout
  },
  setup (props, context) {
    // collapsed
    const { boolean: collapsed, triggerBoolean: triggerCollapsed } = useBoolean()
    // 菜单
    // const menuList = useState('app', 'menuList')
    const store = useStore()
    const menuList = computed(() => store.state.app.menuList)
    return {
      menuList,
      collapsed,
      triggerCollapsed
    }
  }
}
</script>

<style scoped lang="less">
.layout {
  min-height: 100vh;

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
}
</style>

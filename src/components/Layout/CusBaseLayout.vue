<template>
  <a-layout class="layout">
    <a-layout-sider
      collapsible
      v-model:collapsed="collapsed"
      :trigger="null"
      width="256"
    >
      <div class="logo"/>
      <MenuList
        ref="menuRef"
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
      <CusPageHeader
        title="Title"
        :breadcrumb="{
          routes: menuList,
         }"
      >
      </CusPageHeader>
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
import { computed, ref } from 'vue'
import MenuList from './components/Menu.vue'
import { useStore } from 'vuex'
import CusPageHeader from './components/PageHeader'

export default {
  name: 'CusBaseLayout',
  components: {
    // MenuList: () => import('./components/menu.js')
    MenuList,
    CusPageHeader
    // ALayout: Layout
  },
  setup (props, context) {
    // 菜单 ref
    const menuRef = ref(null)
    const closeMenu = value => {
      menuRef.value.setOpenKeysByBoolean(value)
    }
    // collapsed
    // 之所以加个回调，因为得先得纵向收起展开的菜单之后，再横向收起。如果反过来了，就会闪一下展开的菜单！
    const { boolean: collapsed, triggerBoolean: triggerCollapsed } = useBoolean(closeMenu)
    const store = useStore()
    const menuList = computed(() => store.state.app.menuList)
    return {
      menuList,
      menuRef,
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

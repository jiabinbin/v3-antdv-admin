<template>
  <a-layout class="layout">
    <a-layout-sider
      collapsible
      v-model:collapsed="collapsed"
      :trigger="null"
      width="256"
      class="layout-sider"
    >
      <div class="logo"/>
      <MenuList
        ref="menuRef"
        :menu-list="menuList"
      />
    </a-layout-sider>
    <a-layout class="layout-content">
      <Header
        :collapsed="collapsed"
        :collapsedClick="triggerCollapsed"
      ></Header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer>
        ©{{new Date().getFullYear()}} Jobin Jia
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { useBoolean } from '@/hooks/useBoolean/useBoolean'
import { computed, ref } from 'vue'
import MenuList from './components/Menu.vue'
import { useStore } from 'vuex'
import Header from '@/components/Layout/components/Header'

export default {
  name: 'CusBaseLayout',
  components: {
    MenuList,
    Header
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

<style scoped lang="less" vars="{ collapsed }">
.layout {
  min-height: 100vh;

  .layout-sider {
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }

  .layout-content {
    min-height: 100vh;
    width: 100%;
    //background: #ffffff;
  }
}
</style>

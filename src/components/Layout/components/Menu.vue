<template>
  <a-menu
    theme="dark"
    mode="inline"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="handleClickMenu"
  >
    <template
      v-for="menu in menuList"
    >
      <template
        v-if="(!menu.children || (menu.children && menu.children.length === 0))"
      >
        <a-menu-item
          :key="menu.name"
        >
          <Icon v-if="menu.meta.icon" :icon="menu.meta.icon"></Icon>
          <span>{{ menu?.meta?.title }}</span>
        </a-menu-item>
      </template>

      <template
        v-if="menu.children && menu.children.length === 1"
      >
        <a-menu-item
          :key="menu.name"
        >
          <Icon v-if="menu.children[0].meta.icon" :icon="menu.children[0].meta.icon"></Icon>
          <span>{{ menu?.children[0]?.meta?.title }}</span>
        </a-menu-item>
      </template>

      <template
        v-if="menu.children && menu.children.length > 1"
      >
        <SubMenu :key="menu.name" :current-menu="menu" v-on:title-click="titleClick"></SubMenu>
      </template>
    </template>
  </a-menu>
</template>

<script>
import { defineComponent, reactive, toRefs, watch, computed } from 'vue'
import Icon from '@/components/AppBaseComponents/Icon/CusIcon'
import SubMenu from '@/components/Layout/components/SubMenu'
import { useRouter, useRoute } from 'vue-router'
import { getParentRouteName } from '@/utils/tools'

export default defineComponent({
  name: 'Menu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  components: {
    Icon,
    SubMenu
  },
  setup (props, context) {
    // router
    const router = useRouter()
    const route = useRoute()
    const routeState = reactive({
      routeName: computed(() => {
        return route.name
      })
    })

    // state
    const state = reactive({
      selectedKeys: [],
      openKeys: []
    })

    // 菜单
    // 设置打开的菜单key
    const setMenuOpenKes = keys => {
      state.openKeys = keys
    }
    // 跟据当前路径打开子菜单
    // 监听路由变化
    watch(routeState, (p) => {
      const { routeName } = p
      state.selectedKeys = [routeName]
      const openKey = getParentRouteName(routeName, props.menuList)
      setMenuOpenKes(openKey)
    }, {
      immediate: true
    })

    // menu click
    const handleClickMenu = (e) => {
      const { key } = e
      router.push({ name: key })
    }

    const titleClick = (openKeys) => {
      const { key } = openKeys
      state.openKeys = [key]
    }

    return {
      ...toRefs(state),
      handleClickMenu,
      titleClick
    }
  }
})
</script>

<style scoped>

</style>

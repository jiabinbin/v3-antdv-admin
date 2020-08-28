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
import { defineComponent, reactive, watchEffect, toRefs } from 'vue'
import Icon from '@/components/AppBaseComponents/Icon/CusIcon'
import SubMenu from '@/components/Layout/components/SubMenu'
import { useRouter, useRoute } from 'vue-router'

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

    // state
    const state = reactive({
      selectedKeys: [],
      openKeys: []
    })

    // 跟据当前路径选中菜单
    state.selectedKeys = [route.name]
    // menu click
    const handleClickMenu = (e) => {
      const { key } = e
      console.log(key)
      state.selectedKeys = [key]
      router.push({ name: key })
    }

    watchEffect(() => {
      console.log(state.selectedKeys)
    })

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

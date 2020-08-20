<template>
  <a-menu
    theme="dark"
    mode="inline"
    @click="handleClickMenu"
  >
    <!--    :open-keys="openKeys"-->
    <!--    :selectedKeys="selectedKeys"-->
    <!--    @openChange="openChange"-->
    <!--    @click="handleClickMenu"-->
    <template
      v-for="menu in menuList"
    >
      <template
        v-if="(!menu.children || (menu.children && menu.children.length === 0))"
      >
        <a-menu-item
          :key="menu.path"
        >
          <Icon v-if="menu.meta.icon" :icon="menu.meta.icon"></Icon>
          <span>{{ menu?.meta?.title }}</span>
        </a-menu-item>
      </template>

      <template
        v-if="menu.children && menu.children.length === 1"
      >
        <a-menu-item
          :key="menu.path"
        >
          <Icon v-if="menu.children[0].meta.icon" :icon="menu.children[0].meta.icon"></Icon>
          <span>{{ menu?.children[0]?.meta?.title }}</span>
        </a-menu-item>
      </template>

      <template
        v-if="menu.children && menu.children.length > 1"
      >
        <a-sub-menu
          :key="menu.path"
        >
          <template v-slot:title>
            <Icon v-if="menu.meta.icon" :icon="menu.meta.icon"></Icon>
            <span>{{ menu?.meta?.title }}</span>
          </template>
          <Menu :menu-list="menu.children"></Menu>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script>
import { getCurrentInstance, defineComponent } from 'vue'
import Icon from '@/components/AppBaseComponents/Icon/CusIcon'

export default defineComponent({
  name: 'Menu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  components: {
    Icon
  },
  setup (props, context) {
    const { ctx } = getCurrentInstance()
    // Double Click bugs -- vue.js
    // issue: https://github.com/vuejs/vue-next/issues/1747
    // reappear: https://jsbin.com/reyalagawo/edit?html,console,output
    const handleClickMenu = (item, e) => {
      console.log('e ====>  ', e)
      if (!item) return
      const { key } = item
      const route = props.menuList.find(it => it.path === key)
      console.log('route ===> ', route)
      const path = route?.path
      console.log('path ===> ', path)
      path && ctx.$router.push(path)
    }

    return {
      // ...state,
      // openChange,
      handleClickMenu
    }
  }
})
</script>

<style scoped>

</style>

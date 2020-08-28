<template>
  <a-sub-menu
    @titleClick="titleClick"
  >
    <template v-slot:title>
      <Icon v-if="currentMenu.meta.icon" :icon="currentMenu.meta.icon"></Icon>
      <span>{{ currentMenu?.meta?.title }}</span>
    </template>
    <template
      v-for="menu in currentMenu.children"
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
        <SubMenu :key="menu.name" :current-menu="menu"></SubMenu>
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import { defineComponent } from 'vue'
import Icon from '@/components/AppBaseComponents/Icon/CusIcon'

export default defineComponent({
  name: 'SubMenu',
  components: {
    Icon
  },
  props: {
    currentMenu: {
      type: Object
    }
  },
  setup (props, { emit }) {
    const titleClick = keys => {
      emit('title-click', keys)
    }
    return {
      titleClick
    }
  }
})
</script>

<style scoped>

</style>

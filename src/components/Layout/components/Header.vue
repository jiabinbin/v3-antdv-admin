<template>
  <a-layout-header class="layout-header">
    <span class="trigger" @click="collapsedClick">
      <MenuFoldOutlined v-if="!collapsed"/>
      <MenuUnfoldOutlined v-else/>
    </span>
    <div class="right-top">
<!--      <a-menu-->
<!--        class="top-menus"-->
<!--        mode="horizontal"-->
<!--        :defaultSelectedKeys="topMenuKeys"-->
<!--        @click="setSubMenuList"-->
<!--      >-->
<!--        <a-menu-item-->
<!--          v-for="(menu, id) in menuList"-->
<!--          :key="id"-->
<!--        >-->
<!--          {{menu.meta.title}}-->
<!--        </a-menu-item>-->
<!--      </a-menu>-->
      <div class="user-menus">
        <UserMenu></UserMenu>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import UserMenu from '@/components/Layout/components/UserMenu/UserMenu'

export default {
  name: 'Header',
  components: {
    UserMenu
  },
  props: {
    collapsed: {
      type: Boolean,
      require: true
    },
    collapsedClick: {
      type: Function,
      require: true
    }
  }
}
</script>

<style scoped lang="less">
.layout-header {
  background: #fff;
  //padding: 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  //box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding-right: 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
  .right-top {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    .top-menus {
      margin-right: 20px;
    }
  }
}
</style>

<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <UserOutlined/>
          <span style="margin-left: 6px;">{{ userInfo.name || userInfo.mobile || 'Admin' }}</span>
        </span>
        <template
          v-slot:overlay
        >
          <a-menu class="user-dropdown-menu-wrapper">
            <a-menu-item key="0">
              <router-link :to="{name: 'userInfo'}">
                <UserOutlined/>
                <span class="dropdown-menu">个人中心</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="1">
              <router-link :to="{name: 'userSetting'}">
                <SettingOutlined/>
                <span class="dropdown-menu">账户设置</span>
              </router-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <a href="javascript:;" @click="handleLogout">
                <LogoutOutlined/>
                <span class="dropdown-menu">退出登录</span>
              </a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'UserMenu',
  setup (props, context) {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      userInfo: {
        name: 'Admin'
      }
    })
    const { ctx } = getCurrentInstance()
    const handleLogout = () => {
      ctx.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: async () => {
          await store.dispatch('app/logout')
          await router.push({ name: 'login' })
        },
        onCancel () {
        }
      })
    }
    return {
      ...toRefs(state),
      handleLogout
    }
  }
}
</script>
<style scoped lang="less">
.dropdown-menu {
  padding: 0 5px;
}
</style>

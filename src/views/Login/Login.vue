<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :model="formState"
      :rules="formRules"
      @finish="handleFinish"
    >
      <div class="user-login-title">
        <h1>Vue3 AntdV2 Admin</h1>
        <p>基于vue3(composition-api) Antdv2的后台管理系统</p>
      </div>
      <a-form-item
        name="username"
      >
        <a-input
          size="large"
          type="text"
          placeholder="账户: admin"
          v-model:value="formState.username"
        >
          <template v-slot:prefix>
            <UserOutlined :style="{ color: 'rgba(0,0,0,.25)' }"></UserOutlined>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        name="password"
      >
        <a-input-password
          size="large"
          placeholder="密码: admin"
          v-model:value="formState.password"
        >
          <template v-slot:prefix>
            <LockOutlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="loading"
          :disabled="disabled"
        >确定
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { markRaw, reactive, ref, toRefs, defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { message as Message } from 'ant-design-vue'

export default defineComponent({
  name: 'Login',
  setup (props, context) {
    const store = useStore()
    const router = useRouter()

    const formState = reactive({
      username: '',
      password: ''
    })

    const state = reactive({
      loading: false,
      disabled: computed(() => {
        return !(formState.username && formState.password)
      })
    })

    const formLogin = ref(null)

    const formRules = markRaw({
      username: [
        {
          required: true,
          message: '请输入帐户名'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入输入密码'
        }
      ]
    })

    const handleFinish = async values => {
      state.loading = true
      try {
        const { success, message } = await store.dispatch('app/login', values)
        if (!success) {
          Message.error(message)
        } else {
          await router.push({ name: 'root' })
        }
      } catch (e) {
        console.log(e)
      } finally {
        state.loading = false
      }
    }

    return {
      formLogin,
      ...toRefs(state),
      formState,
      formRules,
      handleFinish
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background: #f0f2f5 url('~@/assets/background.svg') no-repeat 50%;

  .user-layout-login {
    width: 368px;
    height: 350px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    .user-login-title {
      text-align: center;

      h1 {
        font-size: 33px;
        color: rgba(0, 0, 0, .85);
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        font-weight: 600;
        position: relative;
      }

      p {
        font-size: 14px;
        color: rgba(0, 0, 0, .45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .login-button {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }
  }
}
</style>

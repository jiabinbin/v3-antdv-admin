import { getMenuList } from '@/utils/tools'
import routes from '@/router/routes'

export default {
  namespaced: true,
  state: {
    menuList: [],
    userInfo: null,
    token: undefined
  },
  getters: {
    token: state => {
      return state.token ? state.token : localStorage.getItem('token')
    },
    userInfo: state => {
      return state.userInfo ? state.userInfo : JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  mutations: {
    SET_MENU_LIST: (state, menuList) => {
      state.menuList = menuList
    },
    CLEAR_TOKEN: state => {
      state.token = undefined
      localStorage.clear()
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    setMenuList: ({ state, commit }, backendMenuList) => {
      commit('SET_MENU_LIST', getMenuList(routes[0].children, backendMenuList))
    },
    logout: ({ state, commit }) => {
      commit('CLEAR_TOKEN')
    },
    login: async ({ state, commit }, payload) => {
      const login = payload => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const { username, password } = payload
            if (username === 'admin' && password === 'admin') {
              resolve({
                code: 200,
                success: true,
                message: '成功',
                data: {
                  userInfo: {
                    username,
                    loginTime: new Date().getTime()
                  },
                  token: Math.random().toString(32).substr(3)
                }
              })
            } else {
              resolve({
                code: 500,
                success: false,
                message: '账户或密码不正确!',
                data: {}
              })
            }
          }, 1000)
        })
      }
      const response = await login(payload)
      const { success, data: { userInfo = {}, token = '' } } = response
      if (success) {
        commit('SET_USER_INFO', userInfo)
        commit('SET_TOKEN', token)
      }
      return response
    }
  }
}

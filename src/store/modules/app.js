import { getMenuList } from '@/utils/tools'
import routes from '@/router/routes'

export default {
  namespaced: true,
  state: {
    menuList: []
  },
  getters: {},
  mutations: {
    SET_MENU_LIST: (state, menuList) => {
      // console.log('set menulist ===>  ', menuList)
      state.menuList = menuList
    }
  },
  actions: {
    setMenuList: ({ state, commit }, backendMenuList) => {
      commit('SET_MENU_LIST', getMenuList(routes[0].children, backendMenuList))
    }
  }
}

// export default {
//   namespaced: true,
//   state: {
//     menuList: []
//   },
//   getters: {},
//   mutations: {
//     SET_MENU_LIST: (state, menuList) => {
//       state.menuList = menuList
//     }
//   },
//   actions: {
//     setMenusList: ({ state, commit }, backendMenuList) => {
//       commit('SET_MENU_LIST', getMenuList(routes[0].children, backendMenuList))
//     }
//   }
// }

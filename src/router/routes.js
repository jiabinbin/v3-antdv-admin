import Main from '@/views/Main/Main'
import PublicRouterView from '@/components/PublicRouterView'

const sysRoutes = [
  {
    path: '/',
    name: 'root',
    redirect: '/dashboard',
    component: Main,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '仪表盘',
          icon: 'DashboardOutlined'
        },
        component: () => import(/* webpackChunkName: "dashboard" */'@/views/Dashboard')
      }, {
        path: '/single-page',
        name: 'singlePage',
        meta: {
          icon: 'FileOutlined',
          title: '单页面'
        },
        component: () => import('@/views/SinglePage/SinglePage')
      }, {
        path: '/hide-menu-page',
        name: 'hideMenuPage',
        meta: {
          isHideInMenu: true,
          title: '不在菜单中显示的页面'
        },
        component: () => import('@/views/NotInMenu/NotInMenuPage')
      }, {
        path: '/level-page',
        name: 'levelPage',
        meta: {
          title: '多级菜单',
          icon: 'OrderedListOutlined'
        },
        component: PublicRouterView,
        children: [
          {
            path: 'level-a',
            name: 'levelA',
            meta: {
              title: '二级菜单(有子菜单)'
            },
            component: PublicRouterView,
            children: [
              {
                path: '/level-a-1',
                name: 'levelA1',
                meta: {
                  title: '二一级菜单'
                },
                component: PublicRouterView,
                children: [
                  {
                    path: '/level-a-1-a',
                    name: 'levelA1A',
                    meta: {
                      title: 'a菜单'
                    },
                    component: () => import(/* webpackChunkName: "la1a" */'@/views/LevelPage/LevelA/La1/La1a/La1a')
                  },
                  {
                    path: '/level-a-2-b',
                    name: 'levelA2b',
                    meta: {
                      title: 'b菜单'
                    },
                    component: () => import(/* webpackChunkName: "la1b" */'@/views/LevelPage/LevelA/La1/La1b/La1b')
                  }
                ]
              },
              {
                path: '/level-B-2',
                name: 'levelB2',
                meta: {
                  title: '二二级菜单',
                  icon: 'WindowsOutlined'
                },
                component: () => import(/* webpackChunkName: "p21b" */'@/views/LevelPage/LevelA/La2/La2')
              }
            ]
          }, {
            path: '/level-b',
            name: 'levelB',
            meta: {
              title: '二级菜单(无子菜单)'
            },
            component: () => import('@/views/LevelPage/LevelB/Lb')
          }
        ]
      }, {
        path: '/form',
        name: 'form',
        meta: {
          title: '表单页',
          icon: 'FormOutlined'
        },
        component: PublicRouterView,
        children: [
          {
            path: '/form-tpl',
            name: 'formTpl',
            meta: {
              title: '模板表单'
            },
            component: () => import('@/views/FormPage/CreateForm')
          }, {
            path: '/form-jsx',
            name: 'formJsx',
            meta: {
              title: 'JSX表单'
            },
            component: () => import('@/views/FormPage/FormJsx.js')
          }
        ]
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '个人页',
          icon: 'UserOutlined'
        },
        component: PublicRouterView,
        children: [
          {
            path: 'user-info',
            name: 'userInfo',
            meta: {
              title: '个人中心'
            },
            component: () => import('@/views/User/UserInfo/UserInfo')
          },
          {
            path: 'user-setting',
            name: 'userSetting',
            meta: {
              title: '个人设置'
            },
            component: () => import('@/views/User/UserSetting/UserSetting')
          }
        ]
      }
    ]
  }
]

const baseRouters = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "login" */'@/views/Login/Login')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404 Error'
    },
    component: () => import(/* webpackChunkName: "404" */'@/views/Exception/404')
  }
]

export default [...sysRoutes, ...baseRouters]

import Main from '@/views/Main/Main'
import PublicRouterView from '@/components/PublicRouterView'

const routers = [
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
          // icon: 'dashboard'
          icon: 'DashboardOutlined'
        },
        component: () => import(/* webpackChunkName: "dbpage" */'@/views/Dashboard')
      }, {
        path: '/single-page',
        name: 'singlePage',
        meta: {
          icon: 'AndroidFilled',
          title: '单页面'
        },
        component: () => import('@/views/Page1/Page1')
      }, {
        path: '/hide-menu-page',
        name: 'hideMenuPage',
        meta: {
          isHideInMenu: true,
          title: '不在菜单中显示的页面'
        },
        component: () => import('@/views/Page1/CreatePage1')
      }, {
        path: '/level-page',
        name: 'list',
        meta: {
          title: '多级菜单',
          icon: 'AppleOutlined'
        },
        component: PublicRouterView,
        children: [
          {
            path: '/level-1',
            name: 'level1',
            meta: {
              title: '二级菜单(含子菜单)',
              icon: 'WindowsOutlined'
            },
            component: PublicRouterView,
            children: [
              {
                path: '/level-1-1',
                name: 'level11',
                meta: {
                  title: '二一级菜单',
                  icon: 'WindowsOutlined'
                },
                component: () => import(/* webpackChunkName: "p21a" */'@/views/Page2/ChildPage/C1')
              },
              {
                path: '/level-1-2',
                name: 'level12',
                meta: {
                  title: '二二级菜单',
                  icon: 'WindowsOutlined'
                },
                component: () => import(/* webpackChunkName: "p21b" */'@/views/Page2/ChildPage/C2')
              }
            ]
          }, {
            path: '/level-2',
            name: 'level2',
            meta: {
              title: '二级菜单(无子菜单)'
            },
            component: () => import('@/views/Page2/ChildPage/C2')
          }
        ]
      }, {
        path: '/other-single',
        name: 'otherSingle',
        meta: {
          title: '另一个单页',
          icon: 'ChromeOutlined'
        },
        component: () => import('@/views/Page3/Page3')
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
      }
    ]
  }
]

export default routers

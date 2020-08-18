import Main from '@/views/Main/Main'
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
          title: 'Dashboard',
          // icon: 'dashboard'
          icon: 'DashboardOutlined'
        },
        component: () => import('@/views/Dashboard')
      }, {
        path: '/page1',
        name: 'page1',
        meta: {
          icon: 'AndroidFilled',
          title: 'page1'
        },
        component: () => import('@/views/Page1/Page1')
      }, {
        path: '/create-page1',
        name: 'create-page1',
        meta: {
          isHideInMenu: true,
          title: 'createPage'
        },
        component: () => import('@/views/Page1/CreatePage1')
      }, {
        path: '/page2',
        name: 'page2',
        meta: {
          title: 'page2',
          icon: 'AppleOutlined'
        },
        // component: () => import('@/views/Page2/Page2'),
        children: [
          {
            path: '/page2-1',
            name: 'page2-1',
            meta: {
              title: 'page2-1',
              icon: 'WindowsOutlined'
            },
            component: () => import('@/views/Page2/ChildPage/C1')
          }, {
            path: '/page2-2',
            name: 'page2-2',
            meta: {
              title: 'page2-2'
            },
            component: () => import('@/views/Page2/ChildPage/C2')
          }
        ]
      }, {
        path: '/page3',
        name: 'page3',
        meta: {
          title: 'page3',
          icon: 'ChromeOutlined'
        },
        component: () => import('@/views/Page3/Page3')
      }, {
        path: '/form-page',
        name: 'formPage',
        meta: {
          title: '表单页',
          icon: 'FormOutlined'
        },
        component: () => import('@/views/FormPage/CreateForm')
      }
    ]
  }
]

export default routers

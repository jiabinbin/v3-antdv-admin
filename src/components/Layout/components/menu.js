import { getCurrentInstance } from 'vue'

export default {
  name: 'sub-menu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },

  setup (props, context) {
  },

  render () {
    const { ctx } = getCurrentInstance()
    return (
      <a-menu
        theme="dark"
        mode="inline"
      >
        {
          ctx.menuList.map(menu => (
            (!menu.children || (menu.children && menu.children.length === 0)) ? (
              <a-menu-item
                key={menu.path}
              >
                {menu.meta.icon ? <a-icon type={menu.meta.icon}/> : null}
                <span>{menu.meta.title}</span>
              </a-menu-item>
            ) : (menu.children && menu.children.length === 1) ? (
              <a-menu-item
                key={menu.path}
              >
                {menu.children[0].meta.icon ? <a-icon type={menu.children[0].meta.icon}></a-icon> : null}
                <span>{menu.children[0].meta.title}</span>
              </a-menu-item>
            ) : (menu.children && menu.children.length > 1) ? (
              <a-sub-menu
                key={menu.path}
              >
                <span slot="title">
                  {menu.meta.icon ? <a-icon type={menu.meta.icon}/> : null}
                  <span>{menu.meta.title}</span>
                </span>
                <sub-menu menu-list={menu.children}></sub-menu>
              </a-sub-menu>
            ) : null
          ))
        }
      </a-menu>
    )
  }
}

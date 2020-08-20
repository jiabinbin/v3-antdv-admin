import { defineComponent, getCurrentInstance } from 'vue'
import Icon from '@/components/AppBaseComponents/Icon/CusIcon'

export default defineComponent({
  name: 'sub-menu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },

  components: {
    Icon
  },

  setup (props, context) {
    const { ctx } = getCurrentInstance()
    console.log(ctx)
    const handleClickMenu = (item, e) => {
      console.log('e ====>  ', e)
      if (!item) return
      const { key } = item
      const route = props.menuList.find(it => it.path === key)
      console.log('route ===> ', route)
      const path = route?.path
      console.log('path ===> ', path)
      path && ctx.$router.push(path)
    }

    return () => (
      <a-menu
        theme="dark"
        mode="inline"
        onClick={handleClickMenu}
      >
        {
          ctx.menuList.map(menu => (
            (!menu.children || (menu.children && menu.children.length === 0)) ? (
              <a-menu-item
                key={menu.path}
              >
                {menu.meta.icon ? <Icon icon={menu.meta.icon}/> : null}
                <span>{menu.meta.title}</span>
              </a-menu-item>
            ) : (menu.children && menu.children.length === 1) ? (
              <a-menu-item
                key={menu.path}
              >
                {menu.children[0].meta.icon ? <Icon icon={menu.children[0].meta.icon}></Icon> : null}
                <span>{menu.children[0].meta.title}</span>
              </a-menu-item>
            ) : (menu.children && menu.children.length > 1) ? (
              <a-sub-menu
                key={menu.path}
                v-slots={{
                  title: () => (
                    <>
                      {menu.meta.icon ? <Icon icon={menu.meta.icon}/> : null}
                      <span>{menu.meta.title}</span>
                    </>
                  )
                }}
              >
                <sub-menu menu-list={menu.children}></sub-menu>
              </a-sub-menu>
            ) : null
          ))
        }
      </a-menu>
    )
  }
})

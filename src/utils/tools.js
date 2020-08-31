let AntMenuKey = 0
let SubMenuKey = 0
export const matchMenu = (menuList) => {
  const result = []
  menuList.forEach((it, index) => {
    // const { meta = { isHideInMenu: true, children: [] } } = it
    // const { meta: { isHideInMenu = false }, children = [] } = it
    const isHideInMenu = (it && it.meta && it.meta.isHideInMenu) || false
    const children = (it && it.children) || []
    if (!isHideInMenu) {
      const matchChildren = (children && children.length !== 0) ? matchMenu(children) : null
      result.push({
        ...it,
        key: matchChildren ? `sub-${SubMenuKey++}` : AntMenuKey++,
        children: matchChildren
      })
    }
  })
  return result
}

/**
 * 后端只需要返回包含如下的格式
 * {
 *   path: '/xxx'
 *   name: 'xxx',
 *   children: {
 *     path: '/xxx/xxx,
 *     name: 'xxx',
 *   }
 * }
 * name或path任意为唯一值即可匹配（当然也可以自定id来匹配）
 * 如果有需要可以完全改为后端控制
 * @param frontMenuList 前端route数组
 * @param backMenuList 后端返回的route数组
 * @returns {*[]}
 */
export const getMenuList = (frontMenuList, backMenuList) => {
  // 先排除isHideInMenu
  const matchChildren = matchMenu(frontMenuList)
  if (!backMenuList || backMenuList.length === 0) {
    return matchChildren
  }
  const menuList = []
  const frontLen = matchChildren.length
  let i
  for (i = 0; i < frontLen; i++) {
    const item = matchChildren[i]
    const { path, name } = item
    const backItem = backMenuList.find(it => it.name === name || it.path === path)
    if (!backItem) {
      continue
    } else {
      const { children: defaultChildren } = item
      const children = defaultChildren.length !== 0 ? getMenuList(defaultChildren) : []
      menuList.push({
        ...item,
        ...backItem,
        children
      })
    }
  }
  return menuList
}

export const getParentRouteName = (currentRouteName, menuList) => {
  const getArray = (currentRouteName, children, record = []) => {
    return children.reduce((result, { name, children: innerChildren }) => {
      if (name === currentRouteName) {
        return [...record, currentRouteName]
      }
      if (innerChildren) {
        return [...result, ...getArray(currentRouteName, innerChildren, [...record, name])]
      }
      return result
    }, [])
  }
  const result = getArray(currentRouteName, menuList)
  return result
}

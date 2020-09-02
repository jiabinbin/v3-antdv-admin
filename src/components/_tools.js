/* eslint-disable */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/

export const isUrl = path => reg.test(path)

export function isImg (path) {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path)
}

export const getDefaultProps = (comProps, curProps) => {
  const props = Object.keys(comProps).reduce((pre, cur) => {
    const stash = {}
    if (curProps[cur]) {
      stash[cur] = curProps[cur]
    }
    return {
      ...pre,
      ...stash
    }
  }, {})
  return props
}

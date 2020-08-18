import { useStore } from 'vuex'

export default async function () {
  const store = useStore()
  await store.dispatch('app/setMenuList', [], { root: false })
}

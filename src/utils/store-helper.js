import { createNamespacedHelpers } from 'vuex'
export default function getVuexWithNameSpace (name) {
  return createNamespacedHelpers(name)
}

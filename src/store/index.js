import { createStore, createLogger } from 'vuex'

const requireStore = require.context('./modules/', false, /[a-z]\w+\.(js)$/)
const modules = requireStore.keys().reduce((p, n) => {
  const name = n.replace(/\.\//, '').replace(/\.js/, '')
  const store = {}
  store[name] = requireStore(n).default
  return { ...p, ...store }
}, {})
/**
 * modules: {
 *   app: Store
 * }
 */

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

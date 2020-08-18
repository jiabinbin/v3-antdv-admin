import { getCurrentInstance, toRefs } from 'vue'
import getVuexWithNameSpace from '@/utils/store-helper'

export function useState (storeName, stateName) {
  const { ctx } = getCurrentInstance()
  const { mapState } = getVuexWithNameSpace(storeName)
  const handlerObject = mapState([stateName])
  const data = handlerObject[stateName].call(ctx)
  console.log('data ===> ', data)
  return {
    ...toRefs(data)
  }
}

export function useAction (storeName, actionName) {
  const { mapActions } = getVuexWithNameSpace(storeName)
  return mapActions
}

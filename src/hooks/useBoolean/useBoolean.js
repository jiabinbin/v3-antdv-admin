import { ref } from 'vue'
export function useBoolean (cb, defaultValue = false) {
  const boolean = ref(defaultValue)
  const triggerBoolean = e => {
    cb(boolean.value)
    boolean.value = !boolean.value
  }
  const changeBoolean = booleanValue => {
    boolean.value = booleanValue
  }

  return {
    boolean,
    triggerBoolean,
    changeBoolean
  }
}

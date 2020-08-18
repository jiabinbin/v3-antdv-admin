import { ref } from 'vue'
export function useBoolean (defaultValue = false) {
  const boolean = ref(defaultValue)
  const triggerBoolean = e => {
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

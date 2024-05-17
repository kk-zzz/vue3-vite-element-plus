import { computed, ref } from 'vue'
import { createInjectionState } from '@vueuse/core'

// 自定义 注入的key
const CounterStoreKey = `counter-store`

const [useProvideCounterStore, useCounterStore] = createInjectionState(
  (initialValue) => {
    // state
    const count = ref(initialValue)

    // getters
    const double = computed(() => count.value * 2)

    // actions
    function increment() {
      count.value++
    }

    return {
      count,
      double,
      increment
    }
  },
  // 默认的 injectionKey: `Symbol(InjectionState)`
  { injectionKey: CounterStoreKey }
)

export { useProvideCounterStore }

export { useCounterStore }

export function useCounterStoreWithDefaultValue() {
  return (
    useCounterStore() ?? {
      count: ref(0),
      double: ref(0),
      increment: () => {}
    }
  )
}

export function useCounterStoreOrThrow() {
  const counterStore = useCounterStore()
  if (counterStore == null) {
    throw new Error('Please call `useProvideCounterStore` on the appropriate parent component')
  }
  return counterStore
}

<script setup>
import { uniq, uniqBy, flatMapDeep } from 'lodash-es'
import HelloWorld from '@/components/HelloWorld.vue'

const arr = [1, 2, 2, 3, 3, 4, 5, 6, 7, 9, 9]
const newArr = uniq(arr)
console.log('arr--', arr, newArr)

const arrayOfObjects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Carol' }
]

// 使用 'id' 属性来去重
const uniqueArray = uniqBy(arrayOfObjects, 'id')
console.log('obj-arr--', arrayOfObjects, uniqueArray)

// flattenDeep
const flattenArrayFunc = (array) => {
  return flatMapDeep(array, (item) => {
    const { children, ...rest } = item
    return [rest, ...flattenArrayFunc(children || [])]
  })
}

const flattenDeepArr = [
  {
    name: 'aa',
    id: 'aa',
    children: [
      {
        name: 'aa-1',
        id: 'aa-1'
      },
      {
        name: 'aa-2',
        id: 'aa-2'
      }
    ]
  },
  {
    name: 'bb',
    id: 'bb',
    children: [
      {
        name: 'bb-1',
        id: 'bb-1',
        children: [
          {
            name: 'bb-1-1',
            id: 'bb-1-1'
          }
        ]
      },
      {
        name: 'bb-2',
        id: 'bb-2'
      }
    ]
  }
]

const flattenArr = flattenArrayFunc(flattenDeepArr)
console.log('flatten--', flattenDeepArr, flattenArr)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

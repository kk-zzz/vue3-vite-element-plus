<script setup>
import { reactive } from 'vue'
import { uniq, uniqBy, flatMapDeep } from 'lodash-es'
import VideoPlayer from '@/components/VideoPlayer.vue'

const playerOptions = reactive({
  url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
  // url: 'https://streampre.hailiao.app/xgplayer/index.html?device=h5&s_url=https%3A%2F%2Fx9ddfewe.bjsongzhuang.com%2Fesport%2F4_328272_62592.m3u8%3Fauth_key%3D1709610599-0-0-fa9d047b813224dbd727eff559fb02fc&hideClarity=1',
  height: '100%',
  width: '100%',
  autoplayMuted: true,
  autoplay: true,
  defaultPlaybackRate: 1, // 默认播放速度
  loop: true, // 循环播放
  videoAttributes: {
    // crossOrigin: 'anonymous' // 允许跨域访问
  }, // videoElement/audioElement 扩展属性
  fluid: true, // 流式布局 若width和height不是Number类型，默认使用16:9比例
  fitVideoSize: 'auto',
  videoFillMode: 'auto',
  marginControls: false,
  playsinline: true,
  playbackRate: [2, 1.5, 1, 0.75, 0.5]
})

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
  <!-- <div class="text ellipsis">电话未接电话的和我的和物都和舞蹈各位搞得我哥的舞蹈各位鱼的各位遇到个无言的歌u我一个毒液大哥物业个无用功的</div> -->
  <VideoPlayer :options="playerOptions" />
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
</style>

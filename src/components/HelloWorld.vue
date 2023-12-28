<script setup>
import { ref } from 'vue'
// import { ElButton } from 'element-plus'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="hello-world">
    <div class="hello-world-scroll">
      <div class="content flex-between">
        <span>11</span>
        <span>222</span>
      </div>
    </div>
    <el-button type="primary">Button</el-button>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code>
        to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
      , the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
.hello-world {
  &-scroll {
    @include scrollBar();
    height: 300px;
    overflow-y: auto;
    .content {
      height: 500px;
    }
  }
}
.read-the-docs {
  color: #888;
}
</style>

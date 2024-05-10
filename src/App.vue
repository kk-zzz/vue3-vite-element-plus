<script setup>
import { useGlobalState } from '@/store/useGlobalState'

const { count, increment, doubleCount } = useGlobalState()
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div class="global-state-count">{{ count }}</div>
    <div class="global-state-double-count">count * 2 = {{ doubleCount }}</div>
    <button @click="increment">count + 1</button>
  </div>
</template>

<style scoped></style>

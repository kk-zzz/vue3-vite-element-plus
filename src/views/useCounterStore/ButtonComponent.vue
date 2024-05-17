<template>
  <button @click="increment">count+</button>
</template>

<script setup>
import { useCounterStore } from '@/store/useCounterStore'

const { increment } = useCounterStore()
</script>

<style></style>

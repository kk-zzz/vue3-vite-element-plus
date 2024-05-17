<template>
  <div>
    <CountComponent />
    <ButtonComponent />
  </div>
</template>

<script setup name="RootComponent">
import CountComponent from './CountComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
import { useProvideCounterStore } from '@/store/useCounterStore'

useProvideCounterStore(0)
</script>

<style lang="scss" scoped></style>

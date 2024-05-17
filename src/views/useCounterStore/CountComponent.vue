<template>
  <ul>
    <li>count: {{ count }}</li>
    <li>double: {{ double }}</li>
  </ul>
</template>

<script setup>
import { useCounterStore } from '@/store/useCounterStore'

const { count, double } = useCounterStore()
</script>

<style lang="scss" scoped></style>

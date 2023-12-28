<script setup>
import { computed, inject, watchEffect } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '1rem'
  },
  sizeH: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  viewBox: {
    type: String,
    default: '0 0 22 22'
  }
})

const svgIcons = inject('svgIcons')

const IconPath = computed(() => svgIcons[props.name])

watchEffect(() => {
  const el = document.documentElement
  if (props.color) {
    el.style.setProperty('--icon-color', props.color)
  }
})
</script>

<template>
  <div
    v-if="name"
    :class="['svg-icon', { color: props.color }]"
    :style="{ width: size, height: sizeH || size }"
  >
    <component
      :is="IconPath"
      :style="{ width: size, height: sizeH || size }"
      :viewBox="props.viewBox"
    />
  </div>
</template>

<style lang="scss" scoped>
.svg-icon {
  &.color {
    :deep(path) {
      fill: var(--icon-color);
    }
  }
}
</style>

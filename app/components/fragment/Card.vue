<script setup lang="ts">
  interface Props {
    className?: string
  }
  defineProps<Props>()
</script>

<template>
  <div :class="['flex flex-col bg-neutral-primary-soft p-6 border border-default rounded-base shadow-lg md:flex-row w-full', className]">
   <slot />
  </div>
</template>
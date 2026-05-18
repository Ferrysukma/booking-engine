<script setup lang="ts">
  interface Props {
    id: string,
    title?: any,
    className?: string,
    position: 'right' | 'bottom'
  }

  const props = defineProps<Props>()

  const drawerPosition = computed(() => {
    const style = {
      right: 'top-0 right-0 w-96 translate-x-full h-screen',
      bottom: 'bottom-0 left-0 right-0 w-full translate-y-full'
    }
    return style[props.position]
  })
</script>

<template>
  <div :id="id" :class="['fixed z-101 p-4 overflow-y-auto transition-transform bg-neutral-primary-soft transform-none', drawerPosition]" tabindex="-1" aria-labelledby="drawer-bottom-label">
    <div class="border-b border-default pb-4 mb-3 flex items-center">
        <h5 :class="className + ' inline-flex items-center text-lg font-bold'">
          {{ title }}
        </h5>
        <button type="button" :data-drawer-hide="id" :aria-controls="id" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 inset-e-2.5 flex items-center justify-center cursor-pointer">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
          <span class="sr-only">Close menu</span>
        </button>
    </div>
    <slot />
  </div>
</template>
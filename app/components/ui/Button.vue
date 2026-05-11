<script setup lang="ts">
  interface Props {
    className?: string | any
    type: "button" | "submit",
    variant: "theme" | "outline" | "custom"
  }

  const props = defineProps<Props>()
  defineEmits(['clicked'])

  const buttonVariant = computed(() => {
    const style = {
      theme: 'text-white ml-2 bg_theme border-transparent px-2 py-2 bg_theme focus:ring_theme',
      outline: ['ml-2 border-transparent bg-white px-2 py-2 focus:ring_theme text_theme'],
      custom: '',
    }
    return style[props.variant]
  })
</script>

<template>
  <button :type="type" :class="['box-border border hover:opacity-90 focus:ring-4 shadow-xs font-medium leading-5 rounded-sm text-sm px-2 py-2 focus:outline-none cursor-pointer', className, buttonVariant]"  @click="$emit('clicked')">
    <slot />
  </button>
</template>
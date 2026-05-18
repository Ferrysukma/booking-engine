<script setup lang="ts">
interface Props {
  className?: string | any
  type?: "button" | "submit",
  variant?: "theme" | "outline" | "custom"
  size?: "sm" | "xs"
  padding?: "sm" | "md"
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  colors: 'theme',
  padding: 'md',
  variant: 'custom',
  size: 'sm',
  type: 'button',
  isModal: false
});
  defineEmits(['clicked'])

const sizeStyle = computed(() => {
  const style = {
    sm: 'text-sm',
    xs: 'text-xs',
  }
  return style[props.size ?? 'sm']
})

const paddingStyle = computed(() => {
  const style = {
    sm: 'px-1 py-1',
    md: 'px-4 py-2',
  }
  return style[props.padding ?? 'md']
})

const variantStyle = computed(() => {
    const style = {
      theme: 'text-white bg_theme border-transparent bg_theme focus:ring_theme',
      outline: ['border_theme bg-white focus:ring_theme text_theme'],
      custom: '',
    }
    return style[props.variant]
  })
</script>

<template>
 <button :type="type"
    :class="['box-border border hover:opacity-90 shadow-xs font-medium leading-5 rounded-sm focus:outline-none cursor-pointer', className, variantStyle, sizeStyle, paddingStyle]"
    @click="$emit('clicked')">
    <slot />
  </button>
</template>
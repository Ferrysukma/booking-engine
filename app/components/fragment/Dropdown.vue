<script setup lang="ts">
  interface Props {
    label?: string
    dropdownClass?: string
    buttonClass?: string
    buttonLabel: string
    color?: "theme" | "theme_outline" | "custom"
  }

  const props = defineProps<Props>()

  const colorStyle = computed(() => {
    const style:any = {
      theme: 'text-white bg_theme border_theme',
      theme_outline: 'bg-white text_theme border_theme',
      custom: '',
    }
    return style[props.color ?? 'custom']
  })
</script>

<template>
  <label v-if="label" class="block mb-1 md:mb-2.5 text-xs font-light text-slate-600 px-2">{{ label }}</label>
  <button id="dropdownHelperButton" data-dropdown-toggle="dropdownHelper" :class="['inline-flex items-center justify-center bg-white box-border border focus:ring-2 shadow-xs leading-5 rounded-xs text-sm px-4 py-2.5 cursor-pointer w-full', colorStyle, buttonClass]" type="button">
    {{ buttonLabel }}
    <UIcon name="material-symbols:keyboard-arrow-down" class="size-5 ml-1" />
  </button>
  <!-- Dropdown menu -->
  <div id="dropdownHelper" :class="['z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-90 grid grid-cols-3 gap-2 p-3', dropdownClass, colorStyle]">
    <slot />
  </div>
</template>
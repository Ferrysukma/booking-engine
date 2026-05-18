<script setup lang="ts">
interface Props {
  name: string,
  id: string,
  checked?: boolean
}

defineProps<Props>()
const model: any = defineModel<any>()
</script>

<template>
  <div class="flex items-start">
    <input :id="id" v-model="model" :name="name" type="checkbox" :checked="checked"
      class="w-4 h-4 border border_theme rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft mt-0.5">
    <label for="link-checkbox" class="select-none ms-2 text-sm font-medium text_theme">
      <slot />
    </label>
  </div>
</template>
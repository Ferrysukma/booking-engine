<script setup lang="ts">
  interface Props {
    name: string,
    id: string,
    checked?: boolean
  }

  defineProps<Props>()
  const model:any = defineModel<any>()
</script>

<template>
  <div>
    <input :id="id" v-model="model" :name="name" type="radio" class="hidden peer" :checked="checked">
    <label :for="id" class="inline-flex items-center justify-between w-full p-2.5 bg-white border rounded-xs cursor-pointer hover:bg-neutral-secondary-medium peer-checked:text-white font-light text-sm text_theme border_theme peer_theme">
      <slot />
    </label>
  </div>
</template>
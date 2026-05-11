<script setup lang="ts">
  interface Props {
    label?: string
    id: string
    options: any
    labelClass?: string
    inputClass?: string
    placeholder?: string
  }

  defineProps<Props>()
  const model:any = defineModel<any>()
</script>

<template>
  <label v-if="label" :for="id" :class="labelClass + ' hidden md:font-thin md:text-2xs md:flex md:justify-center'">{{ label }}</label>
  <select :id="id" v-model="model" :class="'block w-full px-3 py-2.5 bg-neutral-secondary-medium border text-heading text-sm rounded-sm shadow-xs placeholder:text-body cursor-pointer ' + inputClass + ''">
    <option selected>{{ placeholder }}</option>
    <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
  </select>
</template>
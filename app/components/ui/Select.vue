<script setup lang="ts">
interface Props {
  label?: string
  id: string
  options: any
  labelClass?: string
  inputClass?: string
  placeholder?: string
  padding?: string
}

withDefaults(defineProps<Props>(), {
  label: '',
  labelClass: '',
  inputClass: '',
  placeholder: '',
  padding: 'px-3 py-2.5',
});
const model: any = defineModel<any>()

defineEmits(['change'])
</script>

<template>
  <label v-if="label" :for="id" :class="labelClass + ' hidden md:font-thin md:text-2xs md:flex md:justify-center'">{{ label }}</label>
 <select :id="id" v-model="model"
    :class="['block w-full bg-neutral-secondary-medium border text-heading text-xs rounded-sm shadow-xs placeholder:text-body cursor-pointer', inputClass, padding]"
    @click="$emit('change')">
    <option selected>{{ placeholder }}</option>
    <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
  </select>
</template>
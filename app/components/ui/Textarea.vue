<script setup lang="ts">
interface Props {
  className?: string | any
  name: string,
  label?: string,
  placeholder?: string
  id: string
  colors?: "theme"
  readonly?: boolean
  disabled?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  label: '',
  colors: 'theme',
  placeholder: '',
  icon: 'email',
});
const model: any = defineModel<any>()

const colorStyle = computed(() => {
  const style = {
    theme: ['text_theme', 'border_theme text-theme focus:ring-0 placeholder:text_theme'],
    custom: ['text-heading', 'border-default-medium text-heading placeholder:text-body'],
  }
  return style[props.colors ?? 'custom']
})
</script>

<template>
  <div class="mb-5">
    <label v-if="label" :for="id" :class="['block mb-2 text-sm font-semibold', colorStyle[0]]">{{ label }} <span
        v-if="required" class="text-red-600">*</span></label>
    <textarea :id="id" v-model="model" rows="2" :name="name"
      :class="['bg-neutral-secondary-medium border text-xs rounded-sm block w-full px-3 py-2 shadow-xs placeholder:text-body', colorStyle[1]]"
      :placeholder="placeholder" :disabled="disabled" :readonly="readonly" :required="required"></textarea>
  </div>
</template>
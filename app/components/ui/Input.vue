<script setup lang="ts">
interface Props {
  className?: string | any
  type: "text" | "number" | "password" | "email" | "time",
  name: string,
  label?: string,
  placeholder?: string
  id: string
  colors?: "theme"
  readonly?: boolean
  disabled?: boolean
  required?: boolean
  variant?: "withicon" | "default"
  icon?: "email" | "phone" | "time"
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  label: '',
  colors: 'theme',
  placeholder: '',
  variant: 'default',
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
  <div v-if="variant === 'withicon'">
    <label v-if="label" :for="id" :class="['block mb-2 text-sm font-semibold', colorStyle[0]]">{{ label }} <span
        v-if="required" class="text-red-600">*</span></label>
    <div class="relative">
      <div class="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
        <UIcon v-if="icon === 'email'" name="material-symbols:mail-outline"
          :class="['size-5', (colors === 'theme' ? 'text_theme' : 'text-body')]" />
        <UIcon v-if="icon === 'time'" name="material-symbols:alarm-outline"
          :class="['size-5', (colors === 'theme' ? 'text_theme' : 'text-body')]" />
      </div>
      <div v-if="icon === 'time'"
        class="absolute inset-y-0 inset-e-0 top-0 flex items-center pe-3.5 pointer-events-none">
        <UIcon name="material-symbols:keyboard-arrow-down"
          :class="['size-5', (colors === 'theme' ? 'text_theme' : 'text-body')]" />
      </div>
      <input :id="id" v-model="model" :type="type" :name="name"
        :class="['block w-full ps-9 pe-3 py-2 bg-neutral-secondary-medium border text-xs rounded-sm shadow-xs', colorStyle[1]]"
        :placeholder="placeholder" :required="required" :readonly="readonly" :disabled="disabled">
    </div>
  </div>
  <div v-else>
    <label v-if="label" :for="id" :class="['block mb-2 text-sm font-semibold', colorStyle[0]]">{{ label }} <span
        v-if="required" class="text-red-600">*</span></label>
    <input :id="id" v-model="model" :type="type" :name="name"
      :class="['bg-neutral-secondary-medium border text-xs rounded-sm block w-full px-3 py-2 shadow-xs', colorStyle[1]]"
      :placeholder="placeholder" :required="required" :readonly="readonly" :disabled="disabled" />
  </div>
</template>
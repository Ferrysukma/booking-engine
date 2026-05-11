<script setup lang="ts">
  interface Props {
    label?: string
    id?: string
    name?: string
    palceholder?: string
    min?: number
  }

  defineProps<Props>()

  const model:any = defineModel<any>()

  const countModel = (type:string, min?:number) => {
    type === 'increment' ? model.value++ : model.value--
    if (min !== undefined && model.value <= min) {
      model.value = min
    }
  }
</script>

<template>
  <div class="max-w-xs mx-auto">
      <label :for="id" class="block mb-1 text-xs font-light text-slate-600">{{ label }}</label>
      <div class="relative flex items-center max-w-36 shadow-xs rounded-base">
          <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-xs px-1 focus:outline-none h-6" @click="countModel('decrement', min)">
              <UIcon name="ic:baseline-minus" class="size-5" />
          </button>
          <input :id="id" v-model="model" type="number" class="border-x-0 h-6 placeholder:text-slate-400 text-center w-full bg-neutral-secondary-medium border-default-medium py-1.5" :name="name" :placeholder="palceholder" required readonly />
          <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-xs px-1 focus:outline-none h-6" @click="countModel('increment')">
              <UIcon name="material-symbols:add" class="size-5" />
          </button>
      </div>
  </div>
</template>
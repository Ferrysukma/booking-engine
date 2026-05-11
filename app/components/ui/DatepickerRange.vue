<script setup lang="ts">
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
  import { parseDate } from '@internationalized/date'

  interface Props {
    labelStart?: string,
    labelEnd?: string
    border?: string
    text?: string
    startDate: Date | any,
    endDate: Date | any
  }

  const props = defineProps<Props>()
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isDesktop = breakpoints.greaterOrEqual('sm')

  const modelValue:any = shallowRef<any>({
    start: parseDate(props.startDate.toISOString().split('T')[0]),
    end: parseDate(props.endDate.toISOString().split('T')[0])
  })

  const start = computed(() => dateFormatter(modelValue.value.start))
  const end = computed(() => dateFormatter(modelValue.value.end))
</script>

<template>
  <UPopover :content="{ align: 'center' }">
    <div class="block">
      <div class="flex justify-between px-2">
        <label class="block mb-1 md:mb-2.5 text-xs font-light text-slate-600">{{ labelStart }}</label>
        <label class="block mb-1 md:mb-2.5 text-xs font-light text-slate-600">{{ labelEnd }}</label>
      </div>
        <div class="relative max-w-sm">
        <div :class="'flex w-full rounded-xs border overflow-hidden cursor-pointer align-middle py-0.5 ' + (border ?? 'border_theme')" >
          <input 
            v-model="start"
            type="text" 
            :class="['px-3 py-2 outline-none border-0 focus:ring-2 bg-white text-sm w-1/2 cursor-pointer', (text ?? 'text_theme')]"
            placeholder="Select date"
            readonly
          />
          <div class="items-center flex">
            <UIcon name="material-symbols:arrow-forward" class="size-4" />
          </div>
          <input
            v-model="end"
            type="text" 
            :class="['px-3 py-2 outline-none border-0 focus:ring-2 bg-white text-sm w-1/2 text-right cursor-pointer', (text ?? 'text_theme')]"
            placeholder="Select date"
            readonly
          />
        </div>
      </div>
    </div>

    <template #content>
      <div class="flex items-stretch divide-x divide-default">
        <UCalendar v-model="modelValue" color="neutral" variant="subtle" class="p-2" :number-of-months="isDesktop ? 2 : 1" range />
      </div>
    </template>
  </UPopover>
</template>
<script setup lang="ts">
const { isOpen, closeModal } = useModal()

interface Props {
  title?: string,
  size: 'sm' | 'md' | 'lg' | 'xl'
}

const props = defineProps<Props>()

const sizeStyle = computed(() => {
  const style = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-5xl',
    xl: 'max-w-8xl',
  }
  return style[props.size]
})
</script>

<template>
  <!-- Main modal -->
  <div v-if="isOpen" id="modal-fragment" tabindex="-1" aria-hidden="true"
   class="overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-100 justify-center items-center w-full md:inset-0 h-full max-h-full bg-black/50">
    <div :class="['relative flex min-h-screen items-center justify-center p-4 max-h-full', sizeStyle]">
      <!-- Modal content -->
      <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
        <!-- Modal header -->
        <div class="flex items-center justify-between border-b border-default pb-2">
          <h3 class="text-lg font-medium text-heading">
            {{ title }}
          </h3>
          <button type="button"
            class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center cursor-pointer"
            data-modal-hide="modal-fragment" @click="closeModal">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="pt-3">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
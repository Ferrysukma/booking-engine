<script setup lang="ts">
import { initCarousels } from 'flowbite';

defineOptions({
  inheritAttrs: false
})

onMounted(() => {
  initCarousels();
})
interface Props {
  id: string,
  images: string[],
  className?: string,
  subClassName?: string,
  imageClassName?: string,
  indicators?: boolean
}
defineProps<Props>()
</script>

<template>
 <!-- <ClientOnly> -->
 <div :id="id" :class="['relative w-full md:w-1/3 mb-2 md:-mt-2', className]" data-carousel="slide">
    <div :class="['relative h-56 overflow-hidden rounded-base md:h-72', subClassName]">
     <div v-for="(image, index) in images" :key="id + '-' + index" class="hidden duration-700 ease-in-out"
        data-carousel-item>
        <NuxtImg v-slot="{ src, isLoaded, imgAttrs }" :src="image" :alt="index"
          :class="['object-cover w-full rounded-base h-60 md:h-auto my-3 md:mb-0', imageClassName]" :custom="true"
          format="webp">
          <!-- Show the actual image when loaded -->
         <img v-if="isLoaded" v-bind="imgAttrs" :src="src">
          <!-- Show a placeholder while loading -->
          <USkeleton v-else class="w-full rounded-base h-60 md:h-auto my-3 md:mb-0" />
        </NuxtImg>

      </div>
   </div>
    <div v-if="indicators" class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
     <button v-for="(image, index) in images" :key="index" type="button" class="w-3 h-3 rounded-base"
        :aria-current="index === 0 ? 'true' : 'false'" :aria-label="'Slide ' + index + ''"
        :data-carousel-slide-to="index"></button>
    </div>
   <button type="button"
      class="absolute top-0 inset-s-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <UIcon name="ic:baseline-arrow-back-ios-new" class="size-5 text-white" />
       <span class="sr-only">Previous</span>
      </span>
    </button>
   <button type="button"
      class="absolute top-0 inset-e-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <UIcon name="ic:baseline-arrow-forward-ios" class="size-5 text-white" />
       <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
 <!-- </ClientOnly> -->
</template>
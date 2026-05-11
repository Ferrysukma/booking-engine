<script setup lang="ts">
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
      initFlowbite();
  })

  useSeoMeta({
    title: 'Booking Engine',
    description: 'Booking Engine Application',
    ogTitle: 'Booking Engine',
    ogDescription: 'Booking Engine Application',
  })
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

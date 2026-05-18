<script setup lang="ts">
  import CurrencyDropdown from '~/components/CurrencyDropdown.vue';
  import LanguageDropdown from '~/components/LanguageDropdown.vue';

  const bgColor = ref('#F2E4E4')
const navbarColor = ref('#804D3C')

defineProps<{
  fixedFooter?: boolean
}>()
</script>

<template>
  <div>
    <!-- Header -->
    <nav class="bg-transparent fixed w-full z-100 top-0 inset-s-0">
      <div class="container flex flex-wrap items-center justify-between mx-auto px-4 md:px-8 py-2.5 md:py-5 border-b border-default">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
         <UIcon name="material-symbols:garage-home-outline" class="h-7 size-8 text-white" />
          <!-- <NuxtImg src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" /> -->
            <span class="self-center text-base font-semibold whitespace-nowrap text-white">Eaze Villa Uluwatu - Bali</span>
        </a>
        <button data-collapse-toggle="navbar-multi-level-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-multi-level-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
        <div id="navbar-multi-level-dropdown" class="hidden w-full md:block md:w-auto">
          <ul class="flex flex-row font-medium p-2 md:p-0 rounded-base bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:bg-transparent">
            <li>
              <language-dropdown/>
            </li>
            <li>
              <currency-dropdown/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Body -->
    <div class="container mx-auto mt-15 md:mt-16.5">
      <slot/>
    </div>
    <!-- Footer -->
   <footer
      :class="['border-t border-default mt-8 container mx-auto', (fixedFooter && 'fixed bottom-0 left-0 right-0')]">
      <div class="w-full mx-auto p-4 md:py-5">
        <span class="block text-2xs md:text-xs text-white text-center">Eaze Villas Uluwatu - Bali, Jl. Goa Lempeh No.30, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Badung, Bali, Indonesia 80361</span>
     </div>
    </footer>
  </div>
</template>


<style>
  body { background-color: v-bind(bgColor); }

  nav .container {
    background-color: v-bind(navbarColor);
  }
  footer {
    background-color: v-bind(navbarColor);
  }

  body .text_theme {
    color: v-bind(navbarColor);
  }
  body .bg_theme {
    background-color: v-bind(navbarColor);
  }
  body .border_theme {
    border-color: v-bind(navbarColor);
  }
  body .ring_theme {
    outline: v-bind(navbarColor) solid 1px;
  }
  body input:checked + label.peer_theme {
    color: #fff; /* Tailwind's blue-500 */
    background-color: v-bind(navbarColor);
    font-weight: 400;
  }
</style>
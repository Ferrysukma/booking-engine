<script setup lang="ts">
    const data = [
        { name: 'IDR' },
        { name: 'USD' },
        { name: 'EUR' },
        { name: 'GBP' },
        { name: 'IDR' },
        { name: 'USD' },
        { name: 'EUR' },
        { name: 'GBP' },
        { name: 'IDR' },
        { name: 'USD' },
        { name: 'EUR' },
        { name: 'GBP' },
        { name: 'IDR' },
        { name: 'USD' },
        { name: 'EUR' },
        { name: 'GBP' },
        { name: 'IDR' },
        { name: 'USD' },
        { name: 'EUR' },
        { name: 'GBP' },
        { name: 'IDR' },
        { name: 'USD' },
        { name: 'EUR' },
        { name: 'GBP' },
    ]
</script>

<template>
    <button id="mega-menu-currency-button" data-dropdown-toggle="mega-menu-currency" class="flex items-center justify-between w-full py-2 px-3 font-light text-sm text-white md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:hover:font-semibold md:p-0 cursor-pointer">
        <span>IDR</span>
        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
    </button>
    <div id="mega-menu-currency" class="absolute z-10 grid hidden w-auto grid-cols-5 text-sm bg-neutral-primary-soft border border-default rounded-base shadow md:grid-cols-6">
         <div v-for="item in data" :key="item.name" class="flex items-center px-4 py-2 cursor-pointer hover:text-[#804D3C]">
            <span class="ml-2">{{ item.name }}</span>
        </div>
    </div>
</template>
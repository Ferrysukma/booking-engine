<script setup lang="ts">
    const data = [
        {
            name: 'English',
            flag: '/images/flag/gb.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/id.svg'
        },
        {
            name: 'English',
            flag: '/images/flag/ad.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/ae.svg'
        },
        {
            name: 'English',
            flag: '/images/flag/af.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/ag.svg'
        },
        {
            name: 'English',
            flag: '/images/flag/ai.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/al.svg'
        },
        {
            name: 'English',
            flag: '/images/flag/am.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/ao.svg'
        },
        {
            name: 'English',
            flag: '/images/flag/aq.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/ar.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/arab.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/as.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/asean.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/at.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/au.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/aw.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/ax.svg'
        },
        {
            name: 'Indonesia',
            flag: '/images/flag/az.svg'
        },
    ]
</script>

<template>
    <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-light text-white md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:hover:font-semibold md:p-0 cursor-pointer text-sm">
        <NuxtImg src="/images/flag/gb.svg" alt="K" format="webp" height="12px" width="16px" />
        <span class="ml-2">English</span>
        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
    </button>
    <div id="mega-menu-icons-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-4 text-sm bg-neutral-primary-soft border border-default rounded-base shadow md:grid-cols-4 p-2">
        <div v-for="item in data" :key="item.name" class="flex items-center px-4 py-2 cursor-pointer hover:text-[#804D3C]">
            <NuxtImg :src="item.flag" :alt="item.name" format="webp" height="12px" width="16px" />
            <span class="ml-2">{{ item.name }}</span>
        </div>
    </div>
</template>
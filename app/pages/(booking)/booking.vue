<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

  definePageMeta({
    layout: 'booking',
  })

  useSeoMeta({
    title: 'Booking Engine | Booking'
  })

  const route = useRoute();
  const hotel = ref(route.query.data);

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isDesktop = breakpoints.greaterOrEqual('sm')

  const startDate = new Date();
  const endDate = new Date();
  const modelDate = shallowRef({
    start: (startDate),
    end: (new Date(endDate.setDate(endDate.getDate() + 7))),
  })

  const morePackage = ref(false);

  const formFilter = ref({
    adults: 2,
    children: 0,
    rooms: 1
  })

  const rooms = [
    {
      id: 1,
      name: 'EAZECAPE ONE BEDROOM POOL VILLA',
      guest_maximum: 2,
      category: 'Luxury',
      bed: 'Kings Bed',
      images: [
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
      ],
      facilities: [
        '2 team members',
        '20GB Cloud storage',
        'Free domain name',
        'Free SSL certificate',
        'Complete documentation',
        'Integration help',
        'Integration help',
        'Integration help',
        'Integration help',
        'Integration help',
        'Free domain name',
        'Free SSL certificate',
        'Complete documentation',
        'Integration help',
        'Integration help',
        'Integration help',
        'Integration help',
        'Integration help',
      ],
      packages: [
        {
          id: 101,
          name: 'Room Only',
          cancelation: true,
          breakfast: false,
          tax: true,
          initial_price: 3000000,
          price: 2500000,
          stock: 4,
          quantity: 0,
          booking: 0
        },
        {
          id: 102,
          name: 'Room Breakfast',
          cancelation: false,
          breakfast: true,
          tax: false,
          initial_price: 3200000,
          price: 2700000,
          stock: 2,
          quantity: 0,
          booking: 0
        },
      ]
    },
    {
      id: 2,
      name: 'EAZECAPE TWO BEDROOM',
      guest_maximum: 2,
      category: 'Double',
      bed: 'Kings Bed',
      images: [
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
      ],
      facilities: [
        '2 team members',
        '20GB Cloud storage',
        'Free domain name',
        'Free SSL certificate',
        'Complete documentation',
        'Integration help',
        'Integration help',
        'Integration help',
        'Integration help',
        'Integration help',
      ],
      packages: [
        {
          id: 201,
          name: 'Room Only',
          cancelation: true,
          breakfast: false,
          tax: true,
          initial_price: 3000000,
          price: 3000000,
          stock: 3,
          quantity: 0,
          booking: 0
        },
        {
          id: 202,
          name: 'Room Breakfast',
          cancelation: false,
          breakfast: true,
          tax: false,
          initial_price: 3200000,
          price: 3100000,
          stock: 0,
          quantity: 0,
          booking: 0
        },
      ]
    },
    {
      id: 3,
      name: 'EAZECAPE DELUXE BEDROOM',
      guest_maximum: 2,
      category: 'Double',
      bed: 'Kings Bed',
      images: [
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
        '/images/content/rooms.png',
      ],
      facilities: [
        '2 team members',
        '20GB Cloud storage',
        'Free domain name',
        'Free SSL certificate',
        'Complete documentation',
        'Integration help',
        'Integration help',
        'Integration help',
        'Integration help',
        'Integration help',
      ],
      packages: [
        {
          id: 301,
          name: 'Room Only',
          cancelation: true,
          breakfast: false,
          tax: true,
          initial_price: 3000000,
          price: 3000000,
          stock: 3,
          quantity: 0,
          booking: 0
        },
        {
          id: 302,
          name: 'Room Breakfast',
          cancelation: false,
          breakfast: true,
          tax: false,
          initial_price: 3200000,
          price: 3100000,
          stock: 0,
          quantity: 0,
          booking: 0
        },
      ]
    },
  ]

  const lowestPrice = (data:any) => {
    return data.reduce((min:any, obj:any) => { return obj.price < min.price ? obj : min; }, data[0])
  }

  const moreFacilities:any = ref();

  const toggleMoreFacilities = (data: any) => {
    moreFacilities.value = data;
  }

  const morePackages:any = ref([]);
  const toggleMorePackages = (id: any) => {
    morePackages.value.includes(id) ? morePackages.value.splice(morePackages.value.indexOf(id), 1) : morePackages.value.push(id);
  }

  const dataPackages = [
    {
      id: 1,
      name: 'Rooms',
      favorite: false,
    },
    {
      id: 2,
      name: 'Meeting Rooms',
      favorite: false,
    },
    {
      id: 3,
      name: 'Party Packages',
      favorite: true,
    },
    {
      id: 4,
      name: 'Sport Center',
      favorite: false,
    },
    {
      id: 5,
      name: 'Entertaiment',
      favorite: false,
    },
    {
      id: 6,
      name: 'Restaurant',
      favorite: false,
    },
    {
      id: 7,
      name: 'Swiming Pool',
      favorite: false,
    },
  ];

  const { items, addToCart, totalItems, removeFromCart } = useCart()
  
  const roomData = computed(() => {
    rooms.map((room: any) => {
      room.packages.map((packages: any) => {
        let booking = 0;
        items.value.map((item: any) => {
          item.packageId === packages.id && booking++
        })
        packages.booking = booking
      })
    })
    return rooms
  })

  const carts = computed(() => {
    const data:any = [];
    rooms.map((room: any) => {
      let isExist = false
      const details:any = [];
      items.value.map((item: any) => {
        if (item.roomId === room.id) {
          isExist = true
          room.packages.map((packages: any) => {
            if (item.packageId === packages.id) {
              packages.cartId = item.id;
              details.push(packages)
            }
          })
        }
      })
      if (isExist) {
        data.push({
          id: room.id,
          name: room.name,
          subtotal: details.reduce((total:any, item:any) => total + item.price, 0),
          details,
        })
      }
    })
    return data
  })

</script>

<template>
  <div v-if="hotel">
    <section id="hero-section" class="mb-6">
      <div class="bg-neutral-primary-soft block w-full md:max-w-full border border-default rounded-sm shadow-lg">
        <a href="#">
          <NuxtImg src="/images/banner/eaze-villa.png" alt="Banner Hotel" format="webp" class="w-full" loading="lazy" />
        </a>
        <div class="p-6 grid grid-cols-1 md:grid-cols-2 justify-center gap-x-4">
          <div class="flex flex-col md:flex-row items-start justify-end gap-x-4">
            <div class="w-full md:w-auto">
              <UiDatepickerRange labelStart ="CHECK-IN" labelEnd="CHECK-OUT" :startDate="startDate" :endDate="endDate" />
            </div>
            <div class="mt-4 md:mt-0 w-full md:w-auto">
              <ModuleDropdown label="ROOMS" :buttonLabel="formFilter.rooms + ' Rooms, ' + formFilter.adults + ' Adult, ' + formFilter.children + ' Child'" color="theme_outline">
                <UiInputNumber id="rooms-quantity-input" v-model="formFilter.rooms" label="Rooms" name="rooms" :min="1" />
                <UiInputNumber id="adult-quantity-input" v-model="formFilter.adults" label="Adult" name="adult" :min="1" />
                <UiInputNumber id="children-quantity-input" v-model="formFilter.children" label="Child" name="children" :min="0" />
              </ModuleDropdown>
            </div>
          </div>
          <div class="w-full md:w-auto mt-4 md:mt-0">
            <label class="block mb-1 md:mb-2 text-xs font-light text-slate-600 px-2">ROOM & PACKAGE</label>
            <div class="w-auto flex flex-wrap gap-2">
              <div :class="(morePackage ? '' : 'max-h-12 overflow-hidden') + ' flex flex-wrap gap-2 md:max-w-2/3 items-end'">
                <div v-for="(packages, index) in dataPackages" :key="index">
                  <UiRadioBox :id="'packages' + packages.id" v-model="packages.name" name="room_package">{{ packages.name }} <UIcon v-if="packages.favorite" name="material-symbols:star" class="size-5 ml-1 text-yellow-600" /> </UiRadioBox>
                </div>
                <div v-if="morePackage" class="max-w-18">
                  <label :class="['text-xs font-semibold cursor-pointer text_theme']" @click="morePackage = !morePackage"> Hide Packages...</label>
                </div>
              </div>
              <div v-if="!morePackage" class="md:max-w-18 md:-ml-2">
                <label :class="['text-xs font-semibold cursor-pointer text_theme']" @click="morePackage = !morePackage"> More Packages...</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="room-section" class="space-y-3">
      <div class="flex flex-row space-x-2.5">
        <div :class="'flex flex-col space-y-3 ' + ((carts.length > 0) ? 'md:w-2/3' : 'w-full')">
          <ModuleCard v-for="room in roomData" :key="room.id">
            <!-- Room Name -->
            <h3 :class="['flex md:hidden font-bold text-left text-lg text_theme']">{{ room.name }}</h3>
            <p :class="'text-xs flex md:hidden items-end font-light text-slate-400 text_theme'">
              <UIcon name="ic:baseline-person" class="size-5 mr-1" /> Max {{ room.guest_maximum }} Guest/Room
              <UIcon name="material-symbols-light:king-bed-outline" class="size-5 ml-3 mr-1" /> {{ room.category }} - {{ room.bed }}
            </p>
            <!-- Carousel Image -->
            <ModuleCarousel id="rooms-carousel" :images="room.images" indicators />
            <!-- Information -->
            <div class="md:w-2/3 md:grid md:grid-cols-3 md:gap-2 md:ml-6">
              <!-- Title -->
              <div class="col-span-3">
                <h3 :class="['hidden md:flex font-bold text-left text-lg text_theme']">{{ room.name }}</h3>
                <p class="text-xs hidden md:flex items-end font-light text-slate-400">
                  <UIcon name="ic:baseline-person" class="size-5 mr-1" /> Max {{ room.guest_maximum }} Guest/Room
                  <UIcon name="material-symbols-light:king-bed-outline" class="size-5 ml-3 mr-1" /> {{ room.category }} - {{ room.bed }}
                </p>
              </div>
              <!-- Room Facilities -->
              <div :class="['md:border-r md:border_theme']">
                <h5 :class="['font-semibold text-sm text_theme']">Room Facilities</h5>
                <ul role="list" class="max-h-16 md:max-h-46 overflow-y-hidden space-y-1 p-2">
                  <li v-for="(facility, index) in room.facilities" :key="index" class="flex items-center">
                    <UIcon name="material-symbols:check" class="size-4 mr-1" />
                    <span :class="['text-xs font-light text_theme']">{{ facility }}</span>
                  </li>
                </ul>
                <a class="font-light text-xs inline-flex cursor-pointer text-green-500 underline" data-drawer-target="drawer-description" data-drawer-show="drawer-description" data-drawer-placement="right" aria-controls="drawer-description" data-drawer-backdrop="false" @click="toggleMoreFacilities(room)">More Info ... <UIcon name="material-symbols:arrow-outward" class="size-4" /> </a>
              </div>
              <!-- Package Price -->
              <div class="w-full flex flex-col md:col-span-2">
                <div class="flex justify-end mb-3 md:hidden">
                  <UiButton variant="theme" type="button" className="px-4 py-2.5 text-left items-center" @click="toggleMorePackages(room.id)">
                    <p v-if="lowestPrice(room.packages).initial_price !== lowestPrice(room.packages).price" class="text-xs font-light mb-1 line-through">IDR {{ formatPrice(lowestPrice(room.packages).initial_price) }}</p>
                    <div class="inline-flex">
                      IDR {{ formatPrice(lowestPrice(room.packages).price) }}
                      <UIcon name="material-symbols:arrow-drop-down-circle-outline" class="size-5 ml-2" />
                    </div>
                  </UiButton>
                </div>
                <div v-for="packages in room.packages" :key="packages.id" :class="(morePackages.includes(room.id) ? '' : 'hidden') + ' p-2 border-t border-slate-300 md:flex md:w-full'">
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:w-full">
                    <div class="md:order-1">
                      <h4 :class="['font-bold text-base mb-1 text_theme']">{{ packages.name }}</h4>
                      <p :class="['font-thin text-2xs mb-0 text_theme']"><UIcon name="material-symbols:vertical-shades-closed" class="size-3 mr-1" />Cancelation Polish Apply</p>
                      <p :class="['font-thin text-2xs mb-0 text_theme']"><UIcon name="streamline-block:drink-food-food" class="size-3 mr-1" />Breakfast {{ packages.breakfast ? 'Include' : 'Exclude' }}</p>
                    </div>
                    <div class="text-right md:order-3">
                      <p v-if="packages.initial_price !== packages.price" class="text-xs font-light text-red-600 line-through mb-0">IDR {{ formatPrice(packages.initial_price) }}</p>
                      <h4 :class="['font-bold text-base mb-1 text_theme']">IDR {{ formatPrice(packages.price) }}</h4>
                      <p :class="['text-2xs font-light mb-0 text_theme']">Rate For 1 Night</p>
                      <p :class="['text-[9px] font-thin mb-0 text_theme']">Tax {{ packages.tax ? 'Include' : 'Exclude' }}</p>
                    </div>
                    <div v-if="packages.stock - packages.booking > 0" class="w-15 md:order-2 md:justify-self-end">
                      <UiSelect id="quantity" v-model="packages.quantity" label="Rooms" :options="packages.stock - packages.booking" placeholder="0" labelClass="text_theme" inputClass="border_theme focus: '+color.border_theme focus:ring_theme" />
                    </div>
                    <div v-else class="md:order-2 md:justify-self-end md:flex md:items-center">
                      <p class="font-light text-xs text-red-600">Room Not Available</p>
                    </div>
                    <div class="text-right md:order-4">
                      <UiButton v-if="packages.stock - packages.booking > 0" valid class="ml-2 w-full" type="button" variant="theme" @clicked="addToCart(room.id, packages.id, packages.quantity); packages.quantity = 0">
                        {{ packages.booking > 0 ? 'Book More' : 'Book' }}
                      </UiButton>
                      <p v-if="packages.booking > 0" class="text-xs font-thin text-green-500 mt-1 text-right">{{ packages.booking }} Room Selected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModuleCard>
        </div>
        <!-- Cart -->
        <div v-if="carts.length > 0 && isDesktop" class="md:w-1/3">
          <ModuleCard>
            <div class="flex flex-col space-x-2 mb-8 w-full">
              <h4 :class="['text_theme font-bold text-lg mb-4']">Booking Details</h4>
              <div class="flex flex-row space-x-6 border-b border-default mb-2 pb-3">
                <div class="">
                  <p class="text-[12px] font-semibold">Check In</p>
                  <p class="text-[12px] font-semibold">{{ dateFormatter(modelDate.start) }} </p>
                </div>
                <div class="">
                  <p class="text-[12px] font-semibold">Check Out</p>
                  <p class="text-[12px] font-semibold">{{ dateFormatter(modelDate.end) }} </p>
                </div>
              </div>
              <div v-for="cart in carts" :key="cart.id" class="flex flex-col space-y-2 border-b border-default mb-2 pb-3">
                <h4 class="font-semibold text-[16px] mb-2">{{ cart.name }}</h4>
                <table class="w-full">
                  <tbody>
                    <tr v-for="detail in cart.details" :key="detail.id">
                      <th class="py-1 w-[50%] text-green-500 font-medium text-[13px] text-start">{{ detail.name }}</th>
                      <th class="py-1 w-[35%] text-amber-950 font-semibold text-[13px] text-end">IDR {{ formatPrice(detail.price) }}</th>
                      <th class="py-1 w-[15%] text-end"><a class="text-xs font-medium text-red-600 underline hover:no-underline cursor-pointer" @click="removeFromCart(detail.cartId)">Delete</a></th>
                    </tr>
                    <tr>
                      <th class="py-1 w-[50%] text-slate-800 font-bold text-[13px] text-start">Subtotal</th>
                      <th class="py-1 w-[35%] text-slate-800 font-bold text-[13px] text-end">IDR {{ formatPrice(cart.subtotal) }}</th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex flex-col space-y-2 border-b border-default mb-2 pb-3">
                <table class="w-full">
                  <tbody>
                    <tr>
                      <th class="py-1 w-[50%] text-slate-800 font-bold text-[13px] text-start">Total</th>
                      <th class="py-1 w-[35%] text-slate-800 font-bold text-[13px] text-end">IDR {{ formatPrice(carts.reduce((a:any, b:any) => a + b.subtotal, 0)) }}</th>
                      <th></th>
                    </tr>
                  </tbody>
                </table>
              </div>
                <UiButton class="ml-2 w-full mt-4" type="button" variant="theme">
                  {{ carts.length > 0 ? 'Complete Booking' : 'Close' }}
                </UiButton>
            </div>
          </ModuleCard>
        </div>
      </div>
    </section>

    <!-- Drawer Room Details -->
    <ModuleDrawer id="drawer-description" position="right" :title="moreFacilities?.name" className="text_theme">
      <p class="mb-3 text-sm text-body">Upgrade your Figma toolkit with a design system built on top <a href="#" class="font-medium text-heading underline hover:no-underline">Flowbite CSS</a> featuring variants, style guide and auto layout.</p>
      <p class="mb-5 text-sm text-body">Recommended for professional developers and companies building enterprise-level.</p>
      <button class="py-2 px-4 text-white bg_theme border border-slate-500 rounded cursor-pointer">Tes Button</button>
    </ModuleDrawer>

    <!-- Cart Mobile -->
    <div v-if="!isDesktop">
      <button 
        :class="'fixed bottom-6 right-6 h-12 w-12 flex justify-center items-center text-white p-4 rounded-full shadow-lg hover:opacity-90 focus:outline-none z-100 transition-all duration-300 bg_theme'" type="button" data-drawer-target="drawer-cart" data-drawer-show="drawer-cart" data-drawer-placement="bottom" aria-controls="drawer-cart" data-drawer-backdrop="false">
        <UIcon name="material-symbols:shopping-cart-rounded" class="size-5" />
        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-danger border-2 border-buffer rounded-full -top-2 -inset-e-1">{{ totalItems }}</div>
      </button>
    </div>

    <!-- Drawer Cart -->
    <ModuleDrawer v-if="!isDesktop" id="drawer-cart" position="bottom" title="Booking Details" className="text_theme">
      <div class="flex flex-col space-x-2 mb-8">
        <div class="flex flex-row space-x-6 border-b border-default mb-2 pb-3">
          <div class="">
            <p class="text-xs font-medium">Check In</p>
            <p class="text-xs font-medium">{{ dateFormatter(modelDate.start) }} </p>
          </div>
          <div class="">
            <p class="text-xs font-medium">Check Out</p>
            <p class="text-xs font-medium">{{ dateFormatter(modelDate.end) }} </p>
          </div>
        </div>
        <div v-for="cart in carts" :key="cart.id" class="flex flex-col space-y-2 border-b border-default mb-2 pb-3">
          <h4 class="font-semibold text-[16px] mb-2">{{ cart.name }}</h4>
          <table class="w-full">
            <tbody>
              <tr v-for="detail in cart.details" :key="detail.id">
                <th class="py-1 w-[50%] text-green-500 font-medium text-[13px] text-start">{{ detail.name }}</th>
                <th class="py-1 w-[35%] text-amber-950 font-semibold text-[13px] text-end">IDR {{ formatPrice(detail.price) }}</th>
                <th class="py-1 w-[15%] text-end"><a class="text-xs font-medium text-red-600 underline hover:no-underline cursor-pointer" @click="removeFromCart(detail.cartId)">Delete</a></th>
              </tr>
              <tr>
                <th class="py-1 w-[50%] text-slate-800 font-bold text-[13px] text-start">Subtotal</th>
                <th class="py-1 w-[35%] text-slate-800 font-bold text-[13px] text-end">IDR {{ formatPrice(cart.subtotal) }}</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex flex-col space-y-2 border-b border-default mb-2 pb-3">
          <table class="w-full">
            <tbody>
              <tr>
                <th class="py-1 w-[50%] text-slate-800 font-bold text-[13px] text-start">Total</th>
                <th class="py-1 w-[35%] text-slate-800 font-bold text-[13px] text-end">IDR {{ formatPrice(carts.reduce((a:any, b:any) => a + b.subtotal, 0)) }}</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
        <UiButton class="ml-2 w-full mt-4" type="button" variant="theme">
          {{ carts.length > 0 ? 'Complete Booking' : 'Close' }}
        </UiButton>
      </div>
    </ModuleDrawer>
  </div>
</template>
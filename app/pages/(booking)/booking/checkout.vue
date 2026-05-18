<script setup lang="ts">
definePageMeta({
  layout: {
    name: 'booking',
    props: {
      fixedFooter: true
    }
  }
})

useSeoMeta({
  title: 'Booking Engine | Checkout'
})

const { items } = useCart()

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

const carts = computed(() => {
  const data: any = [];
  rooms.map((room: any) => {
    let isExist = false
    const details: any = [];
    items.value.map((item: any) => {
      if (item.roomId === room.id) {
        isExist = true
        room.packages.map((packages: any) => {
          if (item.packageId === packages.id) {
            packages.cartId = item.id;
            packages.capacity = room.guest_maximum
            packages.adults = 1
            packages.children = 0
            details.push(packages)
          }
        })
      }
    })
    if (isExist) {
      data.push({
        ...room,
        subtotal: details.reduce((total: any, item: any) => total + item.price, 0),
        details,
      })
    }
  })
  return data
})

const guestState = ref<GuestCheckoutInterface[]>(carts.value.map((item: any) => ({
  ...item, details: item.details.map((detail: any) => ({
    ...detail, guest: [{
      id: Math.random().toString(36).substring(2, 12),
      first_name: '',
      last_name: '',
    }],
    arrival_time: '',
    special_request: ''
  }))
})));

const handleGuest = (id: number, cartId: any, qty: any) => {
  const template = {
    id: Math.random().toString(36).substring(2, 12),
    first_name: '',
    last_name: '',
  }

  console.log('cartId', cartId)

  const data: any = guestState.value.find((item: any) => item.id === id)
  if (data) {
    const detail = data.details.find((item: any) => item.cartId === cartId)
    // console.log('data', data)
    const selisih = detail.guest.length - qty
    // console.log('selisih', selisih)
    if (qty > detail.guest.length) {
      for (let i = 0; i < Math.abs(selisih); i++) {
        detail.guest.push(template)
      }
    } else {
      detail.guest.splice(detail.guest.length - selisih, selisih)
    }
  }
}
</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <section id="guest-section" class="md:col-span-2 p-2 md:p-0 md:mt-3">
       <FragmentCard>
          <div class="w-full flex flex-col gap-4">
            <div v-for="(item) in guestState" :key="item.id" class="border border_theme rounded-lg p-2">
              <h3 class="text_theme font-semibold text-base mb-2">{{ item.name }}</h3>
              <div v-for="detail in item.details" :key="detail.id">
                <div class="relative flex pb-5 items-center">
                  <div class="grow border-t border-gray-400"></div>
                 <span class="shrink mx-4 text_theme border border_theme text-sm rounded-lg px-3 py-1 ">{{
                    detail.name

                  }}</span>
                  <div class="grow border-t border-gray-400"></div>
                </div>
               <div class="flex flex-wrap md:flex-row md:align-middle space-x-3 space-y-2 mb-3 md:mb-0">
                  <div class="flex w-1/3 md:w-25">
                    <label class="text-sm font-base text_theme mr-2 mt-1">Adult</label>
                    <div class="w-full">
                      <UiSelect :id="'adult-' + detail.cartId" v-model="detail.adults" :options="[1, 2]"
                        padding="py-1 px-1" inputClass="border_theme focus: '+color.border_theme focus:ring_theme"
                        @change="handleGuest(item.id, detail.cartId, detail.adults)" />
                    </div>
                  </div>
                  <div class="flex w-1/3 md:w-25">
                    <label class="text-sm font-base text_theme mr-2 mt-1">Child</label>
                    <div class="w-full">
                      <UiSelect :id="'child' + detail.cartId" v-model="detail.children"
                        inputClass="border_theme focus: '+color.border_theme focus:ring_theme" :options="[0, 1, 2]"
                        padding="py-1 px-1" />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 md:gap-3 md:mt-3">
                  <div class="space-y-3">
                    <div v-for="guest, index in detail.guest" :key="guest.id"
                      class="grid grid-cols-1 md:grid-cols-2 gap-3">
                     <UiInput :id="'first_name-' + guest.id" v-model="guest.first_name" type="text" name="first_name[]"
                        :label="'Guest ' + (index + 1)" placeholder="First Name" required />
                      <UiInput :id="'last_name-' + guest.id" v-model="guest.last_name" type="text" name="last_name[]"
                        label="Last Name" placeholder="Last Name" />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 md:mt-0">
                    <div class="w-auto">
                      <UiInput :id="'time-' + detail.cartId" v-model="detail.arrival_time" type="time"
                        name="arrival_time[]" label="Arrival Time" variant="withicon" icon="time" />
                    </div>
                    <div class="col-span-2">
                      <UiTextarea :id="'special_request-' + detail.cartId" v-model="detail.special_request"
                       name="special_request[]" placeholder="Special Request" label="Special Request" colors="theme" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>

      </FragmentCard>

        <FragmentCard class="mt-3">
          <div class="w-full flex flex-col gap-2">
            <h3 class="text_theme font-bold text-base mb-1.5">Contact Details</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
              <UiInput id="contact_first_name" type="text" name="contact_first_name" placeholder="First Name"
                label="Guest" required />
              <UiInput id="contact_last_name" type="text" name="contact_last_name" placeholder="Last Name"
                label="Last Name" />
              <UiInput id="email" type="email" name="email" placeholder="Email" variant="withicon" icon="email"
                label="Email" required />
             <FragmentInputPhone />
            </div>

        </div>
       </FragmentCard>
      </section>

    <section id="cart-section">
        <ModuleCart :carts="carts" isPayment />
      </section>

  </div>
  </div>
</template>
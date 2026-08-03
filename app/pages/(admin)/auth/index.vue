<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

useSeoMeta({
  title: 'Booking Engine | Sign In'
})

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Contoh: log data, bisa diganti dengan API call
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  alert('Login clicked!')
}
</script>

<template>
  <!-- Bagian Form -->
  <div class="flex w-full md:w-1/2 items-center justify-center p-8">
    <div class="w-full max-w-md border  border-gray-200 rounded-lg space-y-6">
      <h2 class="text-3xl font-bold text-gray-800 text-center">Sign In</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" id="email" required
            class="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" type="password" id="password" required
            class="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <!-- Tombol Sign In -->
        <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Sign In
        </button>
      </form>

      <!-- Link tambahan -->
      <p class="text-center text-sm text-gray-600">
        Belum punya akun?
        <NuxtLink to="/signup" class="text-blue-600 hover:underline">Sign Up</NuxtLink>
      </p>
    </div>
  </div>
</template>

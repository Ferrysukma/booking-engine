<template>
  <div class="h-screen flex flex-row">
    <!-- Bagian Gambar -->
    <div class="hidden md:flex w-[50%] bg-blue-600 items-center justify-center">
      <img
        src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Login Illustration" class="object-cover h-full w-full" />
    </div>

    <!-- Bagian Form -->
    <slot />
  </div>
</template>
<script setup>
const error = useError();

</script>

<template>
  <div class="absolute z-10 inset-0 error-page-bg">
  </div>
  <div class="relative z-20 flex justify-center items-center h-screen">
    <div class="text-center text-white">
      <h2 class="text-8xl">Oops!</h2>
      <p class="mt-8 mb-12 text-2xl font-light">{{ error.statusCode }}: {{ error.message }}</p>
      <NuxtLink to="/"
                class="bg-sky-500 p-4 border rounded transition-colors duration-300 hover:bg-transparent">Take me home
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.error-page-bg {
  background-image: url('./assets/images/404.jpg');
  background-size: cover;
  background-position: center;
}

.error-page-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
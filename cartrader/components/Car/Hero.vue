<template>
  <div class="hero relative h-screen w-100 bg-no-repeat bg-cover bg-bottom">
    <div class="bg-black bg-opacity-75 absolute inset-0 flex justify-center items-center">
      <div class="text-center w-50">
        <h2 class="text-8xl font-sans mb-10 text-white">Find your drive</h2>
        <CarSearchBar />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('./assets/images/hero.jpg');
}
</style>

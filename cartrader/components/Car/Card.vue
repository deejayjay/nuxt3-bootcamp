<script setup>
const props = defineProps({
  car: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
       @click="navigateTo(`/car/${car.name}-${car.id}`)">
    <div class="flex h-full">
      <NuxtImg :src="car.url"
               :alt="car.name"
               class="w-[300px] h-full" />
      <section class="p-4 flex flex-col">
        <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
        <p class="text-gray-700">{{ car.description }}</p>
        <p class="mt-auto text-3xl font-medium">${{ car.price }}</p>
      </section>
    </div>
  </div>
</template>

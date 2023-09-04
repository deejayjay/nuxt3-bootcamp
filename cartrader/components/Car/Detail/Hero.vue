<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  miles: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="mt-10">
    <NuxtImg :src="imageUrl"
             :alt="name"
             class="w-full" />
    <h2 class="mt-10 text-4xl">{{ name }}</h2>
    <div class="text-slate-500 flex justify-between text-lg mt-3 border-b pb-5">
      <div class="flex">
        <p class="mr-2">{{ seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ miles }} miles</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ price }}</p>
      </div>
    </div>
  </div>
</template>

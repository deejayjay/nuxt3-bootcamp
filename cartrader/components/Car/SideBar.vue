<script setup>
const route = useRoute();
const modal = ref({
  location: false,
  make: false,
  price: false,
});
const city = ref('');

function updateModal(key) {
  modal.value[key] = !modal.value[key];
}

function onLocationSubmit() {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid city name format'
    });
  }

  modal.value.location = false;
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
}
</script>

<template>
  <nav class="shadow border w-96 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Location</h3>
      <p class="text-blue-400 capitalize"
         @click="updateModal('location')">{{ route.params.city }}</p>
      <form v-if="modal.location"
            @submit.prevent="onLocationSubmit"
            class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
        <input v-model="city"
               type="text"
               class="border p-1 rounded" />
        <button type="submit"
                class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>
      </form>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Make</h3>
      <p class="text-blue-400 capitalize">Any</p>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer">
      <h3 class="font-medium">Price</h3>
      <p class="text-blue-400 capitalize">Any</p>
    </div>
  </nav>
</template>

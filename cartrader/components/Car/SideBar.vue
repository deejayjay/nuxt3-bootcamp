<script setup>
const route = useRoute();
const modal = ref({
  location: false,
  make: false,
  price: false,
});
const city = ref('');

const { makes } = useCars();

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

function onMakeClick(make) {
  modal.value.make = false;
  navigateTo(`/city/${route.params.city}/car/${make}`);
}
</script>

<template>
  <nav class="shadow border w-96 mr-10 z-30 h-[190px]">
    <!-- Location starts -->
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
    <!-- Location ends -->
    <!-- Make starts -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Make</h3>
      <p class="text-blue-400 capitalize"
         @click="updateModal('make')">{{ route.params.make || "Any" }}</p>
      <div v-if="modal.make"
           class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex flex-wrap gap-4">
        <button type="submit"
                class="text-black text-[0.875rem] transition-colors hover:text-blue-400 hover:underline"
                v-for="make in makes"
                :key="make"
                @click="onMakeClick(make)">{{ make }}</button>
      </div>
    </div>
    <!-- Make ends -->
    <!-- Price starts -->
    <div class="p-5 flex justify-between relative cursor-pointer">
      <h3 class="font-medium">Price</h3>
      <p class="text-blue-400 capitalize">Any</p>
    </div>
    <!-- Price ends -->
  </nav>
</template>

<script setup>
const cityName = ref('');
const cityError = ref(false);

const handleSearch = () => {
  if (!cityName.value) {
    cityError.value = true;
    return;
  }
  cityError.value = false;
  navigateTo(`/city/${cityName.value}/car`);
};
</script>

<template>
  <form
    @submit.prevent="handleSearch"
    :class="cityError ? 'border-red-500' : 'border-transparent'"
    class="font-sans w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto border-2">
    <input v-model="cityName" type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Search by city..." />
    <button type="submit" class="bg-sky-500 px-10 text-white">Search</button>
  </form>
</template>

<script setup>
const $route = useRoute();

const minPrice = computed(() => $route.query.minPrice);
const maxPrice = computed(() => $route.query.maxPrice);

const { data: cars, refresh } = await useFetchCars($route.params.city, {
  make: $route.params.make,
  minPrice,
  maxPrice
});

watch(() => $route.query, () => refresh());
</script>

<template>
  <div>
    <p v-if="cars && !cars.length"
       class="text-red-600 text-center font-light mt-4 bg-red-200 rounded">No cars that match the search filter...</p>
    <CarCards v-else
              :cars="cars" />
  </div>
</template>

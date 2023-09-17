<script setup>
definePageMeta({
  layout: 'custom',
});

const $route = useRoute();
const { capitalize } = useUtils();

useHead({
  title: `Car details - ${capitalize($route.params.name)}`
});

const { data: car } = await useFetchCar($route.params.id);

if (!car.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Car with id ${$route.params.id} does not exist`
  });
}
</script>

<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

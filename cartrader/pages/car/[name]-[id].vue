<script setup>
definePageMeta({
  layout: 'custom',
});

const { cars } = useCars();
const $route = useRoute();
const { capitalize } = useUtils();

useHead({
  title: `Car details - ${capitalize($route.params.name)}`
});

const car = computed(() => {
  return cars.find(c => c.id === parseInt($route.params.id));
})

if (!car.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Car with id ${$route.params.id} does not exist`
  });
}
</script>

<template>
  <div v-if="car">
    <CarDetailHero :name="car.name"
                   :image-url="car.url"
                   :price="car.price"
                   :seats="car.seats"
                   :miles="car.miles" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

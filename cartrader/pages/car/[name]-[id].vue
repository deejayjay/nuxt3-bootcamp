<script setup>
definePageMeta({
  layout: 'custom',
});

const $route = useRoute();
const { capitalize } = useUtils();
useHead({
  title: `Car details - ${capitalize($route.params.name)}`
});
</script>

<template>
  <CarDetailHero />
  <CarDetailAttributes />
  <CarDetailDescription />
  <CarDetailContact />
</template>

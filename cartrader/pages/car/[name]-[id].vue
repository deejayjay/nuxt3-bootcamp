<script setup>
definePageMeta({
  layout: 'custom',
});

const $route = useRoute();
useHead({
  title: capitalize($route.params.name)
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
  <CarDetailHero />
  <CarDetailAttributes />
  <CarDetailDescription />
  <CarDetailContact />
</template>

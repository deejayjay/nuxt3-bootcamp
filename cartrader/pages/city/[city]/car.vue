<script setup>
definePageMeta({
  layout: 'custom',
});

const $route = useRoute();
useHead({
  title: `CarTrader - ${$route.params.make ? capitalize($route.params.make) : 'Cars'} in ${capitalize($route.params.city)}`
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
  <div class="flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>

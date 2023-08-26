<script setup>
definePageMeta({
  layout: 'custom',
});

const $route = useRoute();
const { capitalize } = useUtils();
useHead({
  title: `CarTrader - ${$route.params.make ? capitalize($route.params.make) : 'Cars'} in ${capitalize($route.params.city)}`
});
</script>

<template>
  <div class="flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>

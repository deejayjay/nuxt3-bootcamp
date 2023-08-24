<script setup>
const $route = useRoute();
useHead({
  title: `CarTrader - ${$route.params.make ? capitalize($route.params.make) : 'Cars'} in ${capitalize($route.params.city)}`
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
  <div>
    <NavBar />
    <!-- CARS PAGE START -->
    <div class="mx-auto mt-16 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <div class="flex">
        <CarSideBar />
        <NuxtPage />
      </div>
    </div>
    <!-- CARS PAGE END -->
  </div>
</template>

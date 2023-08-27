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
    <NuxtErrorBoundary>
      <CarSideBar />
      <NuxtPage />
      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h2 class="text-8xl text-red-400 mt-8 mb-16">Oops!</h2>
          <code>{{ error }}</code>
          <button class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
                  @click="error.value = null">Go back</button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
import { useLocalStorage } from '@vueuse/core';

const { cars } = useCars();

const favorite = useLocalStorage('favorite', {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true
    };
  }
};
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <CarCard v-for="car in cars"
               :key="car.id"
               :car="car"
               :isFavorite="car.id in favorite"
               @onFavoriteToggle="handleFavorite" />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading cars...</p>
      </template>
    </ClientOnly>
  </div>
</template>

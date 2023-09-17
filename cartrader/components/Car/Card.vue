<script setup>
import heartFilled from "@/assets/images/heartFilled.png";
import heartOutline from "@/assets/images/heartOutline.png";

const props = defineProps({
  car: {
    type: Object,
    required: true
  },
  isFavorite: {
    type: Boolean,
    required: true
  }
});

const supabase = useSupabaseClient();
const imagePath = computed(() => supabase.storage
  .from("images")
  .getPublicUrl(props.car.image).data.publicUrl);

const emit = defineEmits(["onFavoriteToggle"]);
</script>

<template>
  <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <img class="absolute w-6 right-5 top-2 z-20"
         @click="emit('onFavoriteToggle', car.id)"
         :src="isFavorite ? heartFilled : heartOutline"
         :alt="!isFavorite ? 'Add to favorite' : 'Remove from favorites'">
    <div class="flex h-full"
         @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg :src="imagePath"
               :alt="car.name"
               class="w-[300px] h-full" />
      <section class="p-4 flex flex-col">
        <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
        <p class="text-gray-700">{{ car.description }}</p>
        <p class="mt-auto text-3xl font-medium">${{ car.price }}</p>
      </section>
    </div>
  </div>
</template>

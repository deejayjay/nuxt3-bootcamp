<script setup>
const props = defineProps({
  car: Object
});

const supabase = useSupabaseClient();
const imagePath = computed(() => supabase.storage
  .from("images")
  .getPublicUrl(props.car.image).data.publicUrl);
</script>

<template>
  <div class="mt-10">
    <NuxtImg :src="imagePath"
             :alt="car.name"
             class="w-full" />
    <h2 class="mt-10 text-4xl">{{ car.name }}</h2>
    <div class="text-slate-500 flex justify-between text-lg mt-3 border-b pb-5">
      <div class="flex">
        <p class="mr-2">{{ car.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }} miles</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ car.price }}</p>
      </div>
    </div>
  </div>
</template>

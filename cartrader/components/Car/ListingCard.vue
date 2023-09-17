<script setup>
const props = defineProps({
  listing: Object
});

const emits = defineEmits(["onDelete"]);


const supabase = useSupabaseClient();

const imagePath = computed(() => supabase.storage.from("images").getPublicUrl(props.listing.image).data.publicUrl
);
</script>

<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <NuxtImg :src="imagePath"
               :alt="listing.name"
               class="w-80 mr-3 h-44" />
      <div class="p-3">
        <h3 class="text-2xl">{{ listing.name }}</h3>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex items-start">
      <NuxtLink class="text-blue-400"
                :to="`/profile/listings/view/${listing.id}`">View</NuxtLink>
      <button type="button"
              class="text-red-400 ml-5"
              @click="emits('onDelete', listing.id)">Delete</button>
    </div>
  </div>
</template>
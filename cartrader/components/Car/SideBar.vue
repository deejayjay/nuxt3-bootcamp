<script setup>
const route = useRoute();
const router = useRouter();

const modal = ref({
  location: false,
  make: false,
  price: false,
});
const city = ref('');
const priceRange = ref({
  min: "",
  max: ""
});

const priceRangeText = computed(() => {
  const { minPrice, maxPrice } = route.query;

  if (!minPrice && !maxPrice) return "Any";
  if (!minPrice && maxPrice) return `Under $${maxPrice}`;
  if (minPrice && !maxPrice) return `Above $${minPrice}`;
  return `$${minPrice} - $${maxPrice}`;
});

const { makes } = useCars();

function updateModal(key) {
  modal.value[key] = !modal.value[key];
}

function onLocationSubmit() {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid city name format'
    });
  }

  modal.value.location = false;
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
}

function onMakeClick(make) {
  modal.value.make = false;
  navigateTo(`/city/${route.params.city}/car/${make}`);
}

function onPriceSubmit() {
  if (priceRange.value.min && priceRange.value.max && priceRange.value.min > priceRange.value.max) {
    return;
  }
  updateModal('price');
  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max
    },
  });
}
</script>

<template>
  <nav class="shadow border w-96 mr-10 z-30 h-[190px]">
    <!-- Location start -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Location</h3>
      <p class="text-blue-400 capitalize"
         @click="updateModal('location')">{{ route.params.city }}</p>
      <form v-if="modal.location"
            @submit.prevent="onLocationSubmit"
            class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white z-50">
        <input v-model="city"
               type="text"
               class="border p-1 rounded" />
        <button type="submit"
                class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>
      </form>
    </div>
    <!-- Location end -->
    <!-- Make start -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Make</h3>
      <p class="text-blue-400 capitalize"
         @click="updateModal('make')">{{ route.params.make || "Any" }}</p>
      <div v-if="modal.make"
           class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex flex-wrap gap-4 z-50">
        <button type="submit"
                class="text-black text-[0.875rem] transition-colors hover:text-blue-400 hover:underline"
                v-for="make in makes"
                :key="make"
                @click="onMakeClick(make)">{{ make }}</button>
      </div>
    </div>
    <!-- Make end -->
    <!-- Price start -->
    <div class="p-5 flex justify-between relative cursor-pointer">
      <h3 class="font-medium">Price</h3>
      <p class="text-blue-400 capitalize"
         @click="updateModal('price')">{{ priceRangeText }}</p>
      <form v-if="modal.price"
            @submit.prevent="onPriceSubmit"
            class="absolute left-56 top-1 border shadow p-5 -m-1 bg-white z-50">
        <input type="number"
               placeholder="Min"
               v-model="priceRange.min"
               class="border p-1 rounded mb-2">
        <input type="number"
               placeholder="Max"
               v-model="priceRange.max"
               class="border p-1 rounded mb-2">
        <button type="submit"
                class="bg-blue-400 w-full rounded text-white p-1">Apply</button>
      </form>
    </div>
    <!-- Price end -->
  </nav>
</template>

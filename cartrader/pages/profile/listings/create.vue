<script setup>
definePageMeta({
  layout: 'custom',
  middleware: 'auth'
});

const { makes } = useCars();

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const info = useState('adInfo', () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: null
  };
});

const errorMessage = ref('');

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: 'Model *',
    name: 'model',
    placeholder: 'Ex: Camry',
  },
  {
    id: 2,
    title: 'Year *',
    name: 'year',
    placeholder: 'Ex: 2019',
  },
  {
    id: 3,
    title: 'Price *',
    name: 'price',
    placeholder: 'Ex: 10000',
  },
  {
    id: 4,
    title: 'Miles *',
    name: 'miles',
    placeholder: 'Ex: 11000',
  },
  {
    id: 5,
    title: 'City *',
    name: 'city',
    placeholder: 'Ex: Calgary',
  },
  {
    id: 6,
    title: 'Number of Seats *',
    name: 'seats',
    placeholder: 'Ex: 5',
  },
  {
    id: 7,
    title: 'Features *',
    name: 'features',
    placeholder: 'Ex: Heated Seats, Sunroof, Low Mileage',
  }
];

const isButtonDisabled = computed(() => {
  for (const key in info.value) {
    if (!info.value[key]) {
      return true;
    }
  }
  return false;
});


const handleSubmit = async () => {
  const fileName = crypto.randomUUID();
  const { data: imageFromSupabase, error } = await supabase.storage
    .from("images")
    .upload(`public/${fileName}`, info.value.image);

  if (error) {
    errorMessage.value = error.message;
    return;
  }

  const body = {
    make: info.value.make,
    model: info.value.model,
    year: parseInt(info.value.year),
    miles: parseInt(info.value.miles),
    price: parseInt(info.value.price),
    city: info.value.city,
    numberOfSeats: parseInt(info.value.seats),
    description: info.value.description,
    features: info.value.features.split(',').map(feature => feature.trim()),
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value.id,
    image: imageFromSupabase.path,
  };

  try {
    await $fetch("/api/car/listings", {
      method: "POST",
      body
    });
    navigateTo("/profile/listings");
  } catch (error) {
    await supabase.storage
      .from("images")
      .remove([`public/${fileName}`]);
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div>
    <div class="mt-24">
      <h2 class="text-6xl">Create a New Listing</h2>
    </div>
    <form class="shadow rounded p-3 mt-5 flex flex-wrap justify-between"
          @submit.prevent="handleSubmit">
      <CarAdSelect title="Make *"
                   name="make"
                   :options="makes"
                   @change-input="onChangeInput" />
      <CarAdInput v-for="input in inputs"
                  :key="input.id"
                  :title="input.title"
                  :name="input.name"
                  :placeholder="input.placeholder"
                  @change-input="onChangeInput" />
      <CarAdTextArea title="Description *"
                     name="description"
                     placeholder="Ex: Immaculate 2023 Ford Mustang GT in pristine condition. This high-performance beauty boasts a roaring V8 engine, a sleek midnight blue exterior, and a plush leather interior with all the latest tech features. With low mileage and meticulous maintenance, it's ready to deliver an exhilarating driving experience to its next lucky owner."
                     @change-input="onChangeInput" />
      <CarAdImage title="Image *"
                  @change-input="onChangeInput" />
      <div>
        <button type="submit"
                class="bg-blue-400 text-white rounded py-2 px-7 mt-3 disabled:cursor-not-allowed"
                :disabled="isButtonDisabled">Submit</button>
        <p v-if="errorMessage"
           class="mt-3 text-red-400">{{ errorMessage }}</p>
      </div>
    </form>
  </div>
</template>
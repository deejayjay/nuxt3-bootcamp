<script setup>
definePageMeta({
  layout: 'custom',
  middleware: 'auth'
});

const { makes } = useCars();

const info = useState('adInfo', () => {
  return {
    make: '',
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    description: "",
    image: null
  };
});

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
    title: 'Miles *',
    name: 'miles',
    placeholder: 'Ex: 11000',
  },
  {
    id: 4,
    title: 'City *',
    name: 'city',
    placeholder: 'Ex: Calgary',
  },
  {
    id: 5,
    title: 'Number of Seats *',
    name: 'seats',
    placeholder: 'Ex: 5',
  },
  {
    id: 6,
    title: 'Features *',
    name: 'features',
    placeholder: 'Ex: Heated Seats, Sunroof, Low Mileage',
  }
];
</script>

<template>
  <div>
    <div class="mt-24">
      <h2 class="text-6xl">Create a New Listing</h2>
    </div>
    <form class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
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
    </form>
  </div>
</template>
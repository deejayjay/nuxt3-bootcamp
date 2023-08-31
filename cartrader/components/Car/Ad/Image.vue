<script setup>
const image = useState('carImage', () => {
  return {
    preview: null,
    image: null
  };
});

const $emits = defineEmits(['changeInput']);

const onImageUpload = (event) => {
  const input = event.target;
  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    };
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    $emits('changeInput', input.files[0], 'image');
  }
};
</script>

<template>
  <div class="mt-4 w-[100%]">
    <label for="carImage"
           class="text-cyan-500 mb-1 text-sm">Image *</label>
    <div class="form-group mt-2 ">
      <div class="relative">
        <input class="opacity-0 absolute cursor-pointer w-full h-full"
               type="file"
               accept="image/*"
               name="carImage"
               id="carImage"
               @change="onImageUpload">
        <div
             class="cursor-pointer p-12 rounded border-2 border-blue-100 hover:border-blue-300 border-dashed text-center text-gray-500">
          Browse File
        </div>
      </div>
      <div class="border p-2 mt-3 w-56"
           v-if="image.preview">
        <img :src="image.preview"
             class="img-fluid"
             alt="Preview Car Image">
      </div>
    </div>
  </div>
</template>
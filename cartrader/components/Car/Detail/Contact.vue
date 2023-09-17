<script setup>
const route = useRoute();

const listingId = computed(() => route.params.id);

const message = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const successMessage = ref("");
const errorMessage = ref("");

const disableButton = computed(() => {
  for (const key in message.value) {
    if (!message.value[key]) {
      return true;
    }
  }
  return false;
});

const onMessageSubmit = async () => {
  try {
    await $fetch(`/api/car/listings/${listingId.value}/message`, {
      method: "POST",
      body: message.value
    });

    successMessage.value = "Message sent successfully!";
    message.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<template>
  <div class="mt-10">
    <form class="w-[600px] mx-auto"
          @submit.prevent="onMessageSubmit"
          novalidate>
      <div class="flex justify-between">
        <input v-model="message.name"
               type="text"
               class="border p-1"
               placeholder="Name" />
        <input v-model="message.email"
               type="email"
               class="border p-1"
               placeholder="youremail@example.com" />
        <input v-model="message.phone"
               type="tel"
               class="border p-1"
               placeholder="Phone" />
      </div>
      <div class="flex mt-4">
        <textarea v-model="message.message"
                  class="border p-1 w-full"
                  placeholder="Message"></textarea>
      </div>
      <button type="submit"
              class="bg-blue-400 text-white px-10 py-3 rounded mt-4 disabled:cursor-not-allowed"
              :disabled="disableButton">Submit</button>
      <p v-if="successMessage"
         class="text-green-400">{{ successMessage }}</p>
      <p v-if="errorMessage"
         class="text-red-400">{{ errorMessage }}</p>
    </form>
  </div>
</template>

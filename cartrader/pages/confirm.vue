<script setup>
const user = useSupabaseUser();

watch(user, () => {
  if (user.value) {
    const redirectUrl = useRoute().query.redirect || '/';
    setTimeout(() => {
      return navigateTo(redirectUrl);
    }, 1000);
  }
}, { immediate: true });
</script>
<template>
  <div class="h-[calc(100vh-69px)] flex justify-center items-center">
    <button type="button"
            class="text-3xl text-indigo-500 font-medium px-5 py-3 rounded text-center mb-12"
            disabled>
      <UISpinner class="mx-auto h-20 w-20"
                 color="#6366f1" />
      Authenticating user
    </button>
  </div>
</template>
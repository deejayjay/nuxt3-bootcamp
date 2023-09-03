<script setup>
definePageMeta({
  layout: 'custom',
});

const { auth } = useSupabaseClient();

const login = async () => {
  const route = useRoute();
  const { redirect } = route.query;

  const redirectTo = redirect ?
    `${useRuntimeConfig().public.baseUrl}/confirm?redirect=${redirect}` :
    `${useRuntimeConfig().public.baseUrl}/confirm`;

  const { data, error } = await auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo
    },
  });

  if (data) {
    console.log(data);
  }

  if (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="mt-10">
    <h2 class="text-5xl font-bold mb-7">Login</h2>
    <button @click="login"
            class="bg-green-600 border-2 border-green-600 transition transition-colors ease-in p-3 rounded text-white font-bold hover:bg-green-500 hover:text-green-600 hover:bg-white">
      Login with Google
    </button>
  </div>
</template>
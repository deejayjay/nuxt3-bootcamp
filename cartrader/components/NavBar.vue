<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  // 1. Make user null
  // 2. Remove JWT token from browser cookie
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }

  // 3. Redirect to home page
  navigateTo('/');
};
</script>

<template>
  <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
    <h1>
      <NuxtLink to="/"
                class="text-3xl font-mono">Cartrader</NuxtLink>
    </h1>
    <div v-if="user"
         class="flex">
      <NuxtLink to="/profile/listings"
                class="mr-5">Profile</NuxtLink>
      <button type="button"
              @click="logout">Logout</button>
    </div>
    <button v-else
            @click="navigateTo('/login')">Login</button>
  </header>
</template>

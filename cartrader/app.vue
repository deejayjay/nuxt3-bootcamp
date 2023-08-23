<template>
  <div>
    <!-- NAVBAR START -->
    <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
      <h1>
        <a href="#" class="text-3xl font-mono">Cartrader</a>
      </h1>
    </header>
    <!-- NAVBAR END -->

    <!-- CARS PAGE START -->
    <div class="mx-auto mt-16 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <div class="flex">
        <!-- CAR SIDE BAR START -->
        <nav class="shadow border w-64 mr-10 z-30 h-[190px]">
          <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3 class="font-medium">Location</h3>
            <p class="text-blue-400 capitalize">Ottawa</p>
            <!-- <form class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
              <input type="text" class="border p-1 rounded" />
              <button type="submit" class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>
            </form> -->
          </div>
          <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3 class="font-medium">Make</h3>
            <p class="text-blue-400 capitalize">Toyota</p>
          </div>
          <div class="p-5 flex justify-between relative cursor-pointer">
            <h3 class="font-medium">Price</h3>
            <p class="text-blue-400 capitalize">$6,549</p>
          </div>
        </nav>
        <!-- CAR SIDE BAR END -->

        <!-- CAR CARDS START -->
        <!-- CAR CARDS END -->
      </div>
    </div>
    <!-- CARS PAGE END -->
  </div>
</template>

<style scoped>
.hero {
  background-image: url('./assets/images/hero.jpg');
}
</style>

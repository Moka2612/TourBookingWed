<template>
  <section class="bg-gray-50 pb-14 pt-12">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto mb-8">
      <p class="font-bold text-4xl mb-6">Discovery China</p>

      <!-- begin div -->
      <div class="relative mb-4" v-for="chi in china.slice(0, 2)">
        <img
          class="h-96 w-full rounded-lg shadow-lg"
          :src="chi.url"
          alt="Bali Beach"
        />
        <p class="font-bold text-4xl text-gray-100 absolute top-[17rem] left-8">
          {{ chi.id }}
        </p>

        <router-link
          class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-300 absolute top-80 left-8"
          :to="'/chinatours/' + chi.id"
        >
          View details
        </router-link>
      </div>
      <!-- end div -->
    </div>
    <!-- end div -->

    <!-- begin div -->
    <div class="flex justify-center">
      <router-link
        class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-300"
        to="/chinatours"
      >
        More
      </router-link>
    </div>
    <!-- end div -->
  </section>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const china = inject("china");

    return {
      china,
    };
  },
};
</script>

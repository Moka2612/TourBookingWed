<template>
  <section class="bg-gray-100 py-8">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto">
      <p class="font-bold text-4xl mb-6">Discovery China</p>

      <!-- begin div -->
      <div class="mb-8 grid grid-cols-2 gap-3">
        <!-- begin div -->
        <div class="h-96 relative" v-for="chi in china.slice(0, 8)">
          <figure class="rounded-lg shadow-lg overflow-hidden">
            <img
              class="h-96 w-full transition duration-700 hover:scale-[1.1]"
              :src="chi.url"
              alt="Bali Beach"
            />
          </figure>

          <p
            class="font-bold text-4xl text-gray-100 absolute top-[17rem] left-8"
          >
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

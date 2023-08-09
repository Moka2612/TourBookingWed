<template>
  <section class="bg-gray-100 py-8">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto">
      <p class="font-bold text-4xl mb-6">Multinational Discovery</p>

      <!-- begin div -->
      <div class="mb-8 grid grid-cols-2 gap-3">
        <!-- begin div -->
        <div
          class="h-96 relative"
          v-for="tour in longTours"
          :key="tour.id"
          :name="tour.name"
          :img="tour.img2"
        >
          <figure class="rounded-lg shadow-lg overflow-hidden">
            <img
              class="h-96 w-full transition duration-700 hover:scale-[1.1]"
              :src="getIMG(tour.img)"
              alt="Bali Beach"
            />
          </figure>

          <p
            class="font-bold text-4xl text-gray-500 absolute top-[17rem] left-8"
          >
            {{ tour.name }}
          </p>

          <button
            class="h-10 w-28 font-medium rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100 absolute top-80 left-8"
          >
            View details
          </button>
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
    const longTours = inject("longTours");

    function getIMG(img) {
      return "../../../../IMG/IMG-LongTour/" + img;
    }

    return {
      longTours,
      getIMG,
    };
  },
};
</script>

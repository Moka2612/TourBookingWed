<template>
  <section class="bg-cyan-700 pb-14">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto pt-7">
      <p class="font-bold text-4xl mb-6 text-gray-100">Discovery Europe</p>

      <!-- begin div -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-8">
        <!-- begin div -->
        <div
          v-for="(eu, i) in europe.slice(0, 5)"
          :key="eu.id"
          :name="eu.name"
          :img1="eu.img1"
          :img2="eu.img2"
          :class="getColspan(i)"
        >
          <figure class="rounded-lg overflow-hidden">
            <img
              class="h-72 w-full transition duration-700 hover:scale-[1.1]"
              :src="getIMG(eu.img2)"
              alt="Bali Beach"
            />
          </figure>

          <!-- begin div -->
          <div class="h-24 p-2 relative">
            <p class="text-gray-600 text-lg leading-relaxed font-medium">
              {{ eu.name }}
            </p>

            <router-link
              class="h-10 w-28 flex justify-center items-center font-medium rounded-lg border-2 bg-cyan-700 border-cyan-700 text-cyan-50 hover:bg-cyan-100 hover:text-cyan-700 hover:border-2 hover:duration-100 absolute top-12 right-2"
              :to="'/europetours/' + eu.id"
            >
              View details
            </router-link>
          </div>
          <!-- end div -->
        </div>
        <!-- end div -->
      </div>
      <!-- end div -->
    </div>
    <!-- end div -->

    <!-- begin div -->
    <div class="flex justify-center">
      <router-link
        class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100"
        to="/europetours"
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
    const europe = inject("europe");
    console.log(europe);

    function getIMG(img) {
      return "../../../../IMG/IMG-EU/" + img;
    }

    function getColspan(i) {
      if (i === 0 || i === 1) {
        return "h-96 col-span-3 bg-gray-50 rounded-lg";
      } else {
        return "h-96 col-span-2 bg-gray-50 rounded-lg";
      }
    }

    return {
      europe,
      getIMG,
      getColspan,
    };
  },
};
</script>

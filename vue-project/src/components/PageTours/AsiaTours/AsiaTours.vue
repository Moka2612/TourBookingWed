<template>
  <section class="bg-gray-50 pb-14 pt-7">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto">
      <p class="font-bold text-4xl mb-6">Discovery Asia</p>

      <!-- begin div -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        <!-- begin div -->

        <div
          v-for="(asia, i) in asias.slice(0, 4)"
          :key="asia.id"
          :name="asia.name"
          :img1="asia.img1"
          :img2="asia.img2"
          :class="getColspan(i)"
        >
          <figure class="rounded-lg shadow-lg overflow-hidden">
            <img
              class="h-96 w-full transition duration-700 hover:scale-[1.1]"
              :src="getIMG(asia.img2)"
              alt="Bali Beach"
            />
          </figure>

          <p
            class="font-bold text-4xl text-gray-100 absolute top-[17rem] left-8"
          >
            {{ asia.name }}
          </p>

          <router-link
            class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-300 absolute top-80 left-8"
            :to="'/asiatours/' + asia.id"
          >
            View details
          </router-link>
        </div>
        <!-- end div -->
      </div>
      <!-- end div -->
    </div>
    <!-- end div -->

    <!-- begin div -->
    <div class="flex justify-center">
      <router-link
        class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-300"
        to="/asiatours"
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
    const asias = inject("asias");

    function getIMG(img) {
      return "../../../../IMG/IMG-Asia/" + img;
    }

    function getColspan(i) {
      if (i === 0 || i === 3) {
        return "h-96 col-span-2 relative ";
      } else {
        return "h-96 relative ";
      }
    }

    return {
      asias,
      getIMG,
      getColspan,
    };
  },
};
</script>

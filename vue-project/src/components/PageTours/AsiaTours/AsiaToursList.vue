<template>
  <section class="bg-gray-100 py-8">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto">
      <p class="font-bold text-4xl mb-6">Discovery Asia</p>

      <!-- begin div -->
      <div class="mb-8 grid grid-cols-2 gap-3">
        <!-- begin div -->
        <div
          class="h-96 relative"
          v-for="asia in asias"
          :key="asia.id"
          :name="asia.name"
          :img="asia.img2"
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
    const asias = inject("asias");

    function getIMG(img) {
      return "../../../../IMG/IMG-Asia/" + img;
    }

    return {
      asias,
      getIMG,
    };
  },
};
</script>

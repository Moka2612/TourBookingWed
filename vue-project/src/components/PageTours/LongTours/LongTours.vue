<template>
  <section class="bg-cyan-700 pb-14">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto pt-7">
      <p class="font-bold text-4xl mb-6 text-gray-100">
        Multinational Discovery
      </p>

      <!-- begin div -->
      <div class="mb-5">
        <el-carousel
          indicator-position="none"
          :interval="4000"
          type="card"
          height="500px"
        >
          <el-carousel-item
            v-for="tour in longTours"
            :key="tour.id"
            :name="tour.name"
            :img="tour.img"
            class="h-full w-full bg-cover bg-no-repeat bg-center"
            :style="{ backgroundImage: 'url(' + getIMG(tour.img) + ')' }"
          >
            <h3
              class="h-[450px] font-bold text-4xl flex justify-center place-items-end text-cyan-600"
            >
              {{ tour.name }}
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- end div -->

      <!-- begin div -->
      <div class="flex justify-center">
        <router-link
          class="h-10 w-28 flex justify-center items-center rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100"
          to="/longtours"
        >
          More
        </router-link>
      </div>
      <!-- end div -->
    </div>
    <!-- end div -->
  </section>
  <diV class="h-[1px] bg-gray-400"></diV>
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

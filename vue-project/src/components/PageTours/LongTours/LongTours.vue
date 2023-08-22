<template>
  <section class="bg-cyan-900 pb-14">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto pt-7">
      <p class="font-bold text-4xl mb-6 text-gray-100">
        Multinational Discovery
      </p>

      <!-- begin div -->
      <div class="mb-9">
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
            class="h-full w-full"
          >
            <img class="h-full w-full relative" :src="getIMG(tour.img)" />
            <h3
              class="font-extrabold text-4xl text-zinc-500 absolute bottom-5 left-32"
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
  <div class="h-[1px] bg-gray-500"></div>
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

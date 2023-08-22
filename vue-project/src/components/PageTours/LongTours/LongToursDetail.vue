<template>
  <section class="bg-gray-100 py-8">
    <div class="max-w-[60rem] px-4 py-4 bg-white mx-auto rounded-lg">
      <!-- begin div -->
      <div class="h-[400px] max-w-[58rem] mx-auto flex gap-4 mb-4">
        <figure class="basis-2/5">
          <el-carousel class="rounded-lg" height="400px">
            <el-carousel-item v-for="item in 2" :key="item">
              <img class="h-full w-full" :src="getImg(item)" :alt="name" />
              <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </figure>

        <!-- begin div -->
        <div
          class="basis-3/5 h-[400px] bg-gray-100 py-5 px-5 rounded-lg relative"
        >
          <!-- begin div -->
          <div class="h-10 flex justify-between mb-10">
            <p class="flex items-center">
              Country: <span class="text-base font-semibold">{{ name }}</span>
            </p>

            <!-- begin div -->
            <div class="flex">
              <p class="flex items-center">Departure date:</p>

              <div class="flex items-center">
                <el-select v-model="value" filterable placeholder="Select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
            <!-- end div -->
          </div>
          <!-- end div -->

          <!-- begin div -->
          <div class="h-64 w-[500px]">
            <p class="text-base leading-6">{{ description }}</p>
          </div>
          <!-- end div -->

          <button
            class="h-12 w-32 flex justify-center items-center rounded-lg border-2 font-bold bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-300 absolute bottom-5 right-5"
          >
            Book Now
          </button>
        </div>
        <!-- end div -->
      </div>
      <!-- end div -->

      <!-- begin div -->
      <div><el-calendar v-model="value" /></div>
      <!-- end div -->
    </div>
  </section>
</template>

<script>
import { ref, inject } from "vue";

export default {
  props: ["lid"],

  setup(props) {
    const longTours = inject("longTours");

    const selectedTour = longTours.value.find((tour) => tour.id === props.lid);

    const name = selectedTour.name;
    const description = selectedTour.description;
    const img = selectedTour.img;

    function getImg(img) {
      return "../../../../IMG/IMG-LongTour/" + img;
    }

    const options = ref([
      {
        value: "Option1",
        label: "Option1",
      },
      {
        value: "Option2",
        label: "Option2",
      },
      {
        value: "Option3",
        label: "Option3",
      },
      {
        value: "Option4",
        label: "Option4",
      },
      {
        value: "Option5",
        label: "Option5",
      },
    ]);

    return {
      name,
      description,
      img,
      getImg,
      options,
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

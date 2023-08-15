<template>
  <section class="bg-gray-100 py-8">
    <div class="max-w-[60rem] px-4 py-4 bg-white mx-auto rounded-lg">
      <!-- begin div -->
      <div class="h-[400px] max-w-[58rem] mx-auto flex gap-4 mb-4">
        <figure class="basis-2/5">
          <el-carousel class="rounded-lg" height="400px">
            <el-carousel-item v-for="(item, i) in carousel" :key="item">
              <img class="h-full w-full" :src="item" alt="name..." />
              <h3 class="small justify-center" text="2xl">{{ i }}</h3>
            </el-carousel-item>
          </el-carousel>
          <!-- <img class="h-[400px] w-[400px] rounded-lg" :src="getImg" /> -->
        </figure>

        <!-- begin div -->
        <div
          class="basis-3/5 h-[400px] bg-gray-100 py-5 px-5 rounded-lg relative"
        >
          <!-- begin div -->
          <div class="flex justify-between">
            <p>
              Country:
              <span class="text-xl font-semibold sp">{{ idName }}</span>
            </p>

            <!-- begin div -->
            <div class="flex items-center mb-10">
              <p>Departure date:</p>
              <el-select v-model="value" filterable placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
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
import { ref, computed } from "vue";

export default {
  props: ["cid"],
  setup(props) {
    const idName = ref("");
    const description = ref("");
    const carousel = ref("");

    const chinaApi = "https://jsonplaceholder.typicode.com/photos/";

    const chinaApiId = computed(function () {
      return chinaApi + props.cid;
    });

    // Get API
    fetch(chinaApiId.value)
      .then((response) => {
        if (response.ok) {
          return response.json();
          // JSON.parse: JSON -> javascript types
        }
      })
      .then((data) => {
        idName.value = data.id;
        description.value = data.title;
        carousel.value = [];
        const img1 = carousel.value.push(data.url);
        const img2 = carousel.value.push(data.thumbnailUrl);
      });

    const options = ref([
      {
        id: 1,
        value: "Option1",
        label: "Option1",
      },
      {
        id: 2,
        value: "Option2",
        label: "Option2",
      },
      {
        id: 3,
        value: "Option3",
        label: "Option3",
      },
      {
        id: 4,
        value: "Option4",
        label: "Option4",
      },
      {
        id: 5,
        value: "Option5",
        label: "Option5",
      },
    ]);

    return {
      idName,
      description,
      carousel,
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

<template>
  <section class="bg-cyan-700 pb-14">
    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto pt-7">
      <p class="font-bold text-4xl mb-6 text-gray-100">Tour Maps</p>

      <!-- begin div -->
      <div class="mb-5">
        <el-carousel :interval="4000" type="card" height="384px">
          <el-carousel-item v-for="item in 5" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- end div -->

      <!-- begin div -->
      <div class="flex justify-center">
        <button
          class="h-10 w-28 rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100"
        >
          More
        </button>
      </div>
      <!-- end div -->
    </div>
    <!-- end div -->
  </section>
  <diV class="h-[1px] bg-gray-400"></diV>
</template>

<style scoped>
.el-carousel__item h3 {
  color: green;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: gray;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: gray;
}
</style>

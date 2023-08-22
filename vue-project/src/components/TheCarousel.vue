<template>
  <section>
    <div class="h-[400px] max-w-screen-2xl mx-auto mb-4">
      <el-carousel height="400px" :interval="3000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <div>
            <img
              class="h-[400px] w-full relative"
              src="../../IMG/IMG-carousel/hongkong.jpg"
              alt="HongKongCity"
            />

            <p class="text-4xl text-red-700 absolute bottom-20 left-10">
              {{ item }}
            </p>
            <p class="text-4xl text-amber-400 absolute bottom-10 left-10">
              {{ item }}
            </p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- begin div -->
    <div class="flex justify-center max-w-lg mx-auto h-12 mb-10">
      <el-input v-model="input" placeholder="Find Your Tour !" />

      <button class="border-solid bg-amber-500 w-12 h-12">
        <el-icon><Search /></el-icon>
      </button>
    </div>
    <!-- end div -->
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>

<style scoped>
.el-carousel__item h3 {
  color: #00050c;

  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgb(14, 116, 144);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgb(14, 116, 144);
}
</style>

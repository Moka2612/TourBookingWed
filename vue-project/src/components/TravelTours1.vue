<template>
  <section class="bg-gray-50 pb-14">
    <!-- begin div -->
    <div class="flex justify-center max-w-lg mx-auto h-12 mb-20">
      <el-input v-model="input" placeholder="Find Your Tour !" />

      <button class="border-solid bg-amber-500 w-12 h-12">
        <el-icon><Search /></el-icon>
      </button>
    </div>
    <!-- end div -->

    <!-- begin div -->
    <div class="max-w-[60rem] mx-auto">
      <p class="font-bold text-4xl mb-6">Discovery Asia</p>
      <div class="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div class="h-96 col-span-2 relative">
          <img
            class="h-96 w-full rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/w3.jpg"
            alt="Bali Beach"
          />

          <p
            class="font-bold text-4xl text-gray-100 absolute top-[17rem] left-8"
          >
            Indonesia
          </p>

          <button
            class="h-10 w-28 font-medium rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100 absolute top-80 left-8"
          >
            View details
          </button>
        </div>
        <div class="h-96 relative">
          <img
            class="h-96 w-96 rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/Singapore.jpg "
            alt="Singapore"
          />

          <p
            class="font-bold text-4xl text-gray-100 absolute top-[17rem] left-8"
          >
            Singapore
          </p>

          <button
            class="h-10 w-28 font-medium rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100 absolute top-80 left-8"
          >
            View details
          </button>
        </div>

        <div class="h-96 relative">
          <img
            class="h-96 w-96 rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/Thailand.jpg"
            alt="Madivel beach"
          />
          <p
            class="font-bold text-4xl text-gray-100 absolute top-[17rem] left-8"
          >
            Thailand
          </p>
          <button
            class="h-10 w-28 font-medium rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100 absolute top-80 left-8"
          >
            View details
          </button>
        </div>
        <div class="h-96 col-span-2 relative">
          <img
            class="h-96 w-full rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/w2.jpg"
            alt="Thailand"
          />

          <p
            class="font-bold text-4xl text-gray-100 absolute top-[17rem] left-8"
          >
            VietNam
          </p>
          <button
            class="h-10 w-28 font-medium rounded-lg border-2 bg-amber-500 border-amber-500 text-amber-50 hover:bg-amber-100 hover:text-amber-500 hover:border-2 hover:duration-100 absolute top-80 left-8"
          >
            View details
          </button>
        </div>
      </div>
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
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>

<template>
  <section>
    <div class="flex justify-center max-w-lg mx-auto h-12 mb-20">
      <el-input v-model="input" placeholder="Find Your Tour !" />

      <button class="border-solid bg-amber-400 w-12 h-12">
        <el-icon><Search /></el-icon>
      </button>
    </div>

    <div class="w-5/6 mx-auto">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div>
          <img
            class="h-4/5 w-96 rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/Bali.jpg"
            alt="Bali Beach"
          />
          <button>View details</button>
        </div>
        <div>
          <img
            class="h-4/5 w-96 rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/Italy.jpg "
            alt="Italy"
          />
          <button>View details</button>
        </div>
        <div>
          <img
            class="h-4/5 w-96 rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/Japan.jpg"
            alt="Japan"
          />
          <button>View details</button>
        </div>
        <div>
          <img
            class="h-4/5 w-96 rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/Madivel.jpg"
            alt="Madivel beach"
          />
          <button>View details</button>
        </div>
        <div>
          <img
            class="h-4/5 w-96 rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/Thailand.jpg"
            alt="Thailand"
          />
          <button>View details</button>
        </div>
        <div>
          <img
            class="h-4/5 w-96 rounded-lg shadow-lg"
            src="../../IMG/IMG-Tour/Singapore.jpg"
            alt="Singapore"
          />
          <button>View details</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>

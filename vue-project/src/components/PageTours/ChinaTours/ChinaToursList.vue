<template>
  <section>
    <ul v-for="chi in china" :key="chi.id">
      <li>Id {{ chi.id }}</li>
      <li>{{ chi.title }}</li>
      <li><img :src="chi.url" /></li>
    </ul>
  </section>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const china = inject("china");

    return {
      china,
    };
  },
};
</script>

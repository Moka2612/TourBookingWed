<template>
  <asia-tours></asia-tours>
  <europe-tours></europe-tours>
  <china-tours></china-tours>
  <long-tours></long-tours>
</template>

<script>
import AsiaTours from "./PageTours/AsiaTours/AsiaTours.vue";
import EuropeTours from "./PageTours/EuropeTours/EuropeTours.vue";
import ChinaTours from "./PageTours/ChinaTours/ChinaTours.vue";
import LongTours from "./PageTours/LongTours/LongTours.vue";

export default {
  components: {
    AsiaTours,
    EuropeTours,
    ChinaTours,
    LongTours,
  },
};
</script>

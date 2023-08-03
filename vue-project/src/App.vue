<template>
  <the-header></the-header>
  <the-carousel></the-carousel>
  <travel-tour></travel-tour>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheCarousel from "./components/TheCarousel.vue";
import TravelTour from "./components/TravelTour.vue";

export default {
  components: {
    TheHeader,
    TheCarousel,
    TravelTour,
  },
};
</script>

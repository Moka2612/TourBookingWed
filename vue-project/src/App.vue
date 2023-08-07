<template>
  <the-header></the-header>
  <the-carousel></the-carousel>
  <travel-tours1></travel-tours1>
  <travel-tours2></travel-tours2>
  <travel-tours3></travel-tours3>
  <travel-tours4></travel-tours4>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheCarousel from "./components/TheCarousel.vue";
import TravelTours1 from "./components/TravelTours1.vue";
import TravelTours2 from "./components/TravelTours2.vue";
import TravelTours3 from "./components/TravelTours3.vue";
import TravelTours4 from "./components/TravelTours4.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheCarousel,
    TravelTours1,
    TravelTours2,
    TravelTours3,
    TravelTours4,
    TheFooter,
  },
};
</script>

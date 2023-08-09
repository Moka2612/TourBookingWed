<template>
  <the-header></the-header>
  <the-carousel></the-carousel>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheCarousel from "./components/TheCarousel.vue";
import TheFooter from "./components/TheFooter.vue";

import { reactive, provide } from "vue";

export default {
  components: {
    TheHeader,
    TheCarousel,
    TheFooter,
  },
  setup() {
    const asiaTours = reactive([
      {
        id: "a1",
        name: "Indonesia",
        description: "Indonesia",
        alt: "Indonesia picture",
        img1: "indo1.jpg",
        img2: "indo2.jpg",
        price: 100,
      },
      {
        id: "a2",
        name: "Japan",
        description: "Japan",
        alt: "Japan picture",
        img1: "jp1.jpg",
        img2: "jp2.jpg",
        price: 100,
      },
      {
        id: "a3",
        name: "Singapore",
        description: "Singapore",
        alt: "Singapore picture",
        img1: "sin1.jpg",
        img2: "sin2.jpg",
        price: 100,
      },
      {
        id: "a4",
        name: "Thailand",
        description: "Thailand",
        alt: "Thailand picture",
        img1: "thai1.jpg",
        img2: "thai2.jpg",
        price: 100,
      },
      {
        id: "a5",
        name: "Vietnam",
        description: "Vietnam",
        alt: "Vietnam picture",
        img1: "viet1.jpg",
        img2: "viet2.jpg",
        price: 100,
      },
    ]);

    const europeTours = reactive([
      {
        id: "e1",
        name: "Italy",
        description: "Italy",
        alt: "Italy picture",
        img1: "italy1.jpg",
        img2: "italy2.jpg",
        price: 100,
      },
      {
        id: "e2",
        name: "Denmark",
        description: "Denmark",
        alt: "Denmark picture",
        img1: "denmark1.jpg",
        img2: "denmark2.jpg",
        price: 100,
      },
      {
        id: "e3",
        name: "France",
        description: "France",
        alt: "France picture",
        img1: "fra1.jpg",
        img2: "fra2.jpg",
        price: 100,
      },
      {
        id: "e4",
        name: "Germany",
        description: "Germany",
        alt: "Germany picture",
        img1: "ger1.jpg",
        img2: "ger2.jpg",
        price: 100,
      },
      {
        id: "e5",
        name: "Greece",
        description: "Greece",
        alt: "Greece picture",
        img1: "greece1.jpg",
        img2: "greece2.jpg",
        price: 100,
      },
      {
        id: "e6",
        name: "Iceland",
        description: "Iceland",
        alt: "Iceland picture",
        img1: "iceland1.jpg",
        img2: "iceland2.jpg",
        price: 100,
      },
    ]);

    const longTours = reactive([
      {
        id: "l1",
        name: "Red Moroco",
        description: "Red Moroco",
        alt: "Red Moroco picture",
        img: "rcm.png",
        price: 100,
      },
      {
        id: "l2",
        name: "Yellow Cricle",
        description: "Yellow Cricle",
        alt: "Yellow Cricle picture",
        img: "y.png",
        price: 100,
      },
      {
        id: "l3",
        name: "Blue Circle EU",
        description: "Blue Circle EU",
        alt: "Blue Circle EU picture",
        img: "beu.png",
        price: 100,
      },
      {
        id: "l4",
        name: "Green Circle",
        description: "Green Circle",
        alt: "Green Circle picture",
        img: "g.png",
        price: 100,
      },
      {
        id: "l5",
        name: "Pink Circle",
        description: "Pink Circle",
        alt: "Pink Circle picture",
        img: "p.png",
        price: 100,
      },
      {
        id: "l6",
        name: "Purple Circle",
        description: "Purple Circle",
        alt: "Purple Circle picture",
        img: "pur.png",
        price: 100,
      },
    ]);

    provide("asias", asiaTours);
    provide("europe", europeTours);
    provide("longTours", longTours);

    return {};
  },
};
</script>

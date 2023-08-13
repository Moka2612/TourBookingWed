<template>
  <the-header />
  <the-carousel />
  <router-view></router-view>
  <the-footer />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheCarousel from "./components/TheCarousel.vue";
import TheFooter from "./components/TheFooter.vue";

import { ref, provide } from "vue";

export default {
  components: {
    TheHeader,
    TheCarousel,
    TheFooter,
  },
  setup() {
    const areasTour = ref([
      {
        id: "t1",
        name: "Asia Tour",
        tourList: ["a1", "a2", "a3", "a4", "a5"],
      },
      {
        id: "t2",
        name: "Europe Tour",
        tourList: ["e1", "e2", "e3,", "e4", "e5", "e6"],
      },
      {
        id: "t3",
        name: "China Tour",
        tourList: [],
      },
      {
        id: "t4",
        name: "Long Tour",
        tourList: ["l1", "l2", "l3,", "l4", "l5", "l6"],
      },
    ]);

    const asiaTours = ref([
      {
        id: "a1",
        name: "Indonesia",
        description:
          "Indonesia sdfas safda sf asf sadfas dsaf asdf asfd asf asd fsa fdasd fsdf das fas fasf saasf sa afd sdf sa",
        alt: "Indonesia picture",
        img1: "indo1.jpg",
        img2: "indo2.jpg",
        imgCaro: ["indo1.jpg", "indo2.jpg"],
        price: 100,
      },
      {
        id: "a2",
        name: "Japan",
        description: "Japan",
        alt: "Japan picture",
        img1: "jp1.jpg",
        img2: "jp2.jpg",
        imgCaro: ["jp1.jpg", "jp2.jpg"],
        price: 100,
      },
      {
        id: "a3",
        name: "Singapore",
        description: "Singapore",
        alt: "Singapore picture",
        img1: "sin1.jpg",
        img2: "sin2.jpg",
        imgCaro: ["sin1.jpg", "sin2.jpg"],
        price: 100,
      },

      {
        id: "a4",
        name: "Thailand",
        description: "Thailand",
        alt: "Thailand picture",
        img1: "thai1.jpg",
        img2: "thai2.jpg",
        imgCaro: ["thai1.jpg", "thai2.jpg"],
        price: 100,
      },
      {
        id: "a5",
        name: "Vietnam",
        description: "Vietnam",
        alt: "Vietnam picture",
        img1: "viet1.jpg",
        img2: "viet2.jpg",
        imgCaro: ["viet1.jpg", "viet2.jpg"],
        price: 100,
      },
    ]);

    const europeTours = ref([
      {
        id: "e1",
        name: "Italy",
        description: "Italy",
        alt: "Italy picture",
        img1: "italy1.jpg",
        img2: "italy2.jpg",
        imgCaro: ["italy1.jpg", "italy2.jpg"],
        price: 100,
      },
      {
        id: "e2",
        name: "Denmark",
        description: "Denmark",
        alt: "Denmark picture",
        img1: "denmark1.jpg",
        img2: "denmark2.jpg",
        imgCaro: ["denmark1.jpg", "denmark2.jpg"],
        price: 100,
      },
      {
        id: "e3",
        name: "France",
        description: "France",
        alt: "France picture",
        img1: "fra1.jpg",
        img2: "fra2.jpg",
        imgCaro: ["fra1.jpg", "fra2.jpg"],
        price: 100,
      },
      {
        id: "e4",
        name: "Germany",
        description: "Germany",
        alt: "Germany picture",
        img1: "ger1.jpg",
        img2: "ger2.jpg",
        imgCaro: ["ger1.jpg", "ger2.jpg"],
        price: 100,
      },
      {
        id: "e5",
        name: "Greece",
        description: "Greece",
        alt: "Greece picture",
        img1: "greece1.jpg",
        img2: "greece2.jpg",
        imgCaro: ["greece1.jpg", "greece2.jpg"],
        price: 100,
      },
      {
        id: "e6",
        name: "Iceland",
        description: "Iceland",
        alt: "Iceland picture",
        img1: "iceland1.jpg",
        img2: "iceland2.jpg",
        imgCaro: ["iceland1.jpg", "iceland2.jpg"],
        price: 100,
      },
    ]);

    const longTours = ref([
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

    const chinaTours = ref([]);

    // Get Fake API data China Tour
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (response.ok) {
          return response.json();
          // JSON.parse: JSON -> javascript types
        }
      })
      .then((data) => (chinaTours.value = data));

    console.log(chinaTours.value);

    provide("areas", areasTour);
    provide("asias", asiaTours);
    provide("europe", europeTours);
    provide("longTours", longTours);
    provide("china", chinaTours);

    return {
      areasTour,
      asiaTours,
      europeTours,
      longTours,
      chinaTours,
    };
  },
};
</script>

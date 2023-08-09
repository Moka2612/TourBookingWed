import { createRouter, createWebHistory } from "vue-router";

import TheMainTours from "./components/TheMainTours.vue";
import TheNotification from "./components/PageInformation/TheNotification.vue";
import TourGroup from "./components/PageInformation/TourGroup.vue";
import AsiaTours from "./components/PageTours/AsiaTours/AsiaToursList.vue";
import EuropeTours from "./components/PageTours/EuropeTours/EuropeToursList.vue";
import ChinaTours from "./components/PageTours/ChinaTours/ChinaToursList.vue";
import LongTours from "./components/PageTours/LongTours/LongToursList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/mainpage", component: TheMainTours },
    { path: "/tourgroup", component: TourGroup },
    { path: "/notification", component: TheNotification },
    { path: "/asiatours", component: AsiaTours },
    { path: "/europetours", component: EuropeTours },
    { path: "/chinatours", component: ChinaTours },
    { path: "/longtours", component: LongTours },
  ],
});

export default router;

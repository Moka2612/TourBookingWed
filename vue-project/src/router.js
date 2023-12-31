import { createRouter, createWebHistory } from "vue-router";

import TheMainTours from "./components/TheMainTours.vue";
import TheNotification from "./components/PageInformation/TheNotification.vue";
import TourGroup from "./components/PageInformation/TourGroup.vue";
import AsiaTours from "./components/PageTours/AsiaTours/AsiaToursList.vue";
import AsiaDetail from "./components/PageTours/AsiaTours/AsiaDetail.vue";
import EuropeTours from "./components/PageTours/EuropeTours/EuropeToursList.vue";
import EuropeDetail from "./components/PageTours/EuropeTours/EuropeDetail.vue";
import ChinaTours from "./components/PageTours/ChinaTours/ChinaToursList.vue";
import ChinaDetail from "./components/PageTours/ChinaTours/ChinaDetail.vue";
import LongTours from "./components/PageTours/LongTours/LongToursList.vue";
import LongToursDetail from "./components/PageTours/LongTours/LongToursDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // header
    { path: "/mainpage", component: TheMainTours },
    { path: "/tourgroup", component: TourGroup },
    { path: "/notification", component: TheNotification },
    // Asia tours
    { path: "/asiatours", component: AsiaTours },
    { path: "/asiatours/:aid", component: AsiaDetail, props: true },
    // Europe tours
    { path: "/europetours", component: EuropeTours },
    { path: "/europetours/:eid", component: EuropeDetail, props: true },
    // China tours
    { path: "/chinatours", component: ChinaTours },
    { path: "/chinatours/:cid", component: ChinaDetail, props: true },
    // Long tours
    { path: "/longtours", component: LongTours },
    { path: "/longtours/:lid", component: LongToursDetail, props: true },
  ],
});

export default router;

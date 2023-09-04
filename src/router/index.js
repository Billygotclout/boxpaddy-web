import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DriverView from "../views/DriverView.vue";
import FaqView from "../views/FaqView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/driver",
      name: "driver",
      component: DriverView,
    },
    {
      path: "/faq",
      name: "faq",
      component: FaqView,
    },
  ],
});

export default router;

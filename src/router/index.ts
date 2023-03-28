import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/home/HomePage.vue";
import AboutView from "@/pages/about/AboutPage.vue";
import LayoutDefault from "@/layouts/LayoutDefault.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "default",
      component: LayoutDefault,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          component: AboutView,
        },
      ],
    },
  ],
});

export default router;

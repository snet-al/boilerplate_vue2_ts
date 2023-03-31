import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/index/views/HomeView.vue";
import AboutView from "@/pages/index/views/AboutView.vue";
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
          name: "HomeView",
          component: HomeView,
        },
        {
          path: "/about",
          name: "AboutView",
          component: AboutView,
        },
      ],
    },
  ],
});

export default router;

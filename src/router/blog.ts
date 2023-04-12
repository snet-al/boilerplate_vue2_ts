import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/moduleName/HomeView.vue";
import AboutView from "@/views/moduleName/AboutView.vue";
import LayoutDefault from "@/layouts/LayoutDefault.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      components: {
        default: LayoutDefault,
        index: LayoutDefault,
        blog: LayoutDefault,
      },
      children: [
        {
          path: "/",
          components: {
            default: HomeView,
            index: HomeView,
            blog: HomeView,
          },
        },
        {
          path: "/about",
          components: {
            default: AboutView,
            index: AboutView,
            blog: AboutView,
          },
        },
      ],
    },
  ],
});

export default router;

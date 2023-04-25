import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/docsHome/HomeView.vue";
import LayoutDefault from "@/layouts/DocsDefault.vue";

Vue.use(VueRouter);

const docsRouter = new VueRouter({
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: LayoutDefault,
      children: [
        {
          path: "/",
          component: HomeView,
        },
      ],
    },
  ],
});

export default docsRouter;

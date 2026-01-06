import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/IndexPage/HomeView.vue";
import ItemsListView from "@/views/IndexPage/ItemsListView.vue";
import DocsHomeView from "@/views/DocsPage/HomeView.vue";
import IndexDefault from "@/layouts/IndexDefault.vue";
import DocsDefault from "@/layouts/DocsDefault.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: IndexDefault,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "list",
          name: "list",
          component: ItemsListView,
        },
      ],
    },
    {
      path: "/docs",
      component: DocsDefault,
      children: [
        {
          path: "",
          name: "docs",
          component: DocsHomeView,
        },
      ],
    },
  ],
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/IndexPage/HomeView.vue";
import ItemsListView from "../views/IndexPage/ItemsListView.vue";
import IndexDefault from "@/layouts/IndexDefault.vue";

Vue.use(VueRouter);

const indexRouter = new VueRouter({
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: IndexDefault,
      children: [
        {
          path: "/",
          component: HomeView,
        },
        {
          path: "/list",
          component: ItemsListView,
        },
      ],
    },
  ],
});

export default indexRouter;

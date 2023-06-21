import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/IndexPage/HomeView.vue";
import ItemListView from "../views/IndexPage/ItemListView.vue";
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
          component: ItemListView,
        },
      ],
    },
  ],
});

export default indexRouter;

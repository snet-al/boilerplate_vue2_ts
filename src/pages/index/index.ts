import Vue from "vue";
import App from "@/pages/index/IndexPage.vue";
import vuetify from "@/plugins/vuetify";
import indexRouter from "../../router/index";
import "@/styles/theme.scss";

new Vue({
  router: indexRouter,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

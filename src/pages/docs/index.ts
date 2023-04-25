import Vue from "vue";
import App from "@/pages/docs/DocsPage.vue";
import docsRouter from "../../router/docs";
import "@/styles/theme.scss";

new Vue({
  router: docsRouter,
  render: (h) => h(App),
}).$mount("#app");

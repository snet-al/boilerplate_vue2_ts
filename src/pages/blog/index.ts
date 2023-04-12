import Vue from "vue";
import App from "@/pages/blog/BlogPage.vue";
import router from "../../router/blog";

import "@/style/theme.scss";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

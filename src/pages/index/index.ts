import Vue from "vue";
import App from "@/pages/index/IndexPage.vue";
import router from "../../router";

import "@/style/theme.scss";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

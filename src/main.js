import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppText from "./components/shared-components/AppText";
import "./assets/styles/main.scss";
import "./plugins/media/media-mixin";
import "./plugins/directives/click-outside";
import "./plugins/mixins/mixin";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.config.productionTip = false;
Vue.component("AppText", AppText);
Vue.component("AppLoading", Loading);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

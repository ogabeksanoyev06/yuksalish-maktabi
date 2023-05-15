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
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.component("AppText", AppText);
Vue.component("AppLoading", Loading);
Vue.use(ElementUI);
import i18n from "./locales/i18n";
import Util from "@/plugins/globalMethod";

Vue.prototype.$localeKey = Util.localeKey;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

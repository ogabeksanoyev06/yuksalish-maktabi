import Vue from "vue";
import Vuex from "vuex";
import generalOptions from "./Modules/generalOptions";
import user from "./Modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generalOptions,
    user,
  },
});

<template>
  <div>
    <HeroBanner v-if="$route.path == '/'" />
    <AppHeader v-else />
    <div class="page__wrap">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "@/components/layouts/default/app-header/AppHeader";
import TokenService from "../service/TokenService";
import { mapMutations } from "vuex";
import HeroBanner from "@/components/pages/home/HeroBanner.vue";

export default {
  name: "MainLayout",
  components: { AppHeader, AppFooter, HeroBanner },
  methods: {
    ...mapMutations([
      "setWindowWidth",
      "setAccessToken",
      "setIsLoggedOn",
      "setSelectedQuestionIndex",
      "setSelectedSubjectId",
      "setTestType",
    ]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
    setToken() {
      let accessToken = TokenService.getToken();
      if (accessToken !== null) {
        this.setAccessToken(accessToken);
        this.setIsLoggedOn(true);
      } else {
        this.setAccessToken(null);
        this.setIsLoggedOn(false);
      }
    },
    setQuestionIndex() {
      this.setSelectedQuestionIndex(this.checkQuestionIndex());
    },
    setSelectedSubjectIdInLayout() {
      this.setSelectedSubjectId(this.getSelectedSubjectIdMixin());
    },
    setTestTypeInLayout() {
      this.setTestType(this.getTestTypeFromStorage());
    },
  },

  mounted() {
    this.setToken();
    this.setWidth();
    this.setSelectedSubjectIdInLayout();
    this.setQuestionIndex();
    this.setTestTypeInLayout();
    window.addEventListener("resize", this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style lang="scss" scoped>
.page {
  &__wrap {
    min-height: calc(100vh - 100px);
  }
}
</style>

<style>
.vue-notification {
  padding: 10px;
  margin: 5px 5px 5px;
  font-size: 16px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
</style>

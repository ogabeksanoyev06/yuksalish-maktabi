<template>
  <div class="auth__body auth__form mb-30">
    <AppText
      :size="isDesktopSmall ? 26 : 30"
      :line-height="isDesktopSmall ? 30 : 36"
      weight="700"
      class="mb-30"
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Tizimga kirish <span>{{ errorMes }}</span>
    </AppText>
    <br />

    <div class="form-group">
      <BaseInput
        v-model="request.login"
        type="text"
        vid="name"
        v-mask="'998-#########'"
        rules="required|max:255"
        label="Telefon raqami"
        placeholder="998-931234567"
      />
    </div>

    <div class="form-group">
      <BaseInput
        v-model="request.password"
        label="Parol"
        :type="showPassword ? 'text' : 'password'"
        vid="name"
        rules="required|max:255"
      >
        <template #append>
          <img
            src="/icons/eye.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="showPasswordMethod"
            v-if="showPassword"
          />
          <img
            src="/icons/eye-closed2.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="showPasswordMethod"
            v-if="!showPassword"
          />
        </template>
      </BaseInput>
    </div>

    <BlockWrap
      :count="isDesktopSmall ? 1 : 2"
      offset-y="20"
      offset-x="20"
      class="mb-30"
    >
      <BaseCheckbox
        title="Eslab qolish"
        size="18"
        type="checkbox"
        vid="name"
        rules="required|max:255"
      />

      <router-link
        to="/"
        class="weight-700 text-right"
        style="color: #008AE4!important"
      >
        Parolni unutdingizmi
      </router-link>
    </BlockWrap>

    <AppButton
      sides="20"
      class="w-100 mb-30"
      font-size="14"
      theme="main"
      radius="50"
      @click="loginToSystem"
    >
      Kirish
    </AppButton>
    <AppText
      size="14"
      weight="700"
      line-height="17"
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Ro'yxatdan o'tmadingizmi?
      <router-link
        style="color: #008AE4!important; margin-left: 5px;"
        to="/sign-up"
        >Ro'yxatdan o'tish
      </router-link>
    </AppText>
  </div>
</template>

<script>
import AppButton from "../../shared-components/AppButton";
import BaseInput from "../../shared-components/BaseInput";
import BlockWrap from "../../shared-components/BlockWrap";
import BaseCheckbox from "../../shared-components/BaseCheckbox";
import TokenService from "../../../service/TokenService";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "login",
  components: {
    BaseCheckbox,
    BlockWrap,
    BaseInput,
    AppButton,
  },
  data() {
    return {
      request: {
        login: "",
        password: "",
        client_id: 1,
      },
      errorMes: "",
      authError: "",
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getUser"]),
    async loginToSystem() {
      await this.$api
        .post("auth/Login/token", this.request)
        .then((data) => {
          if (data.error) {
            this.errorMes = data.error;
          } else {
            TokenService.saveToken(data.result.access_token);
            TokenService.saveRefreshToken(data.result.refresh_token);
            TokenService.tokenExpireDate(data.result.expires_in);
            this.$router.push({ name: "home" });
            this.request.password = "";
            this.getUser();
          }
        })
        .catch((error) => {
          this.errorMes = error.response.data.error.message;
        });
    },
    showPasswordMethod() {
      this.showPassword = !this.showPassword;
    },
  },
  mounted() {
    if (TokenService.getToken()) {
      this.getUser();
    }
  },
};
</script>

<style scoped></style>

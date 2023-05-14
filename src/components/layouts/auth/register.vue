<template>
  <div class="auth__body auth__form mb-30">
    <AppText
      :size="isDesktopSmall ? 26 : 30"
      :line-height="isDesktopSmall ? 30 : 36"
      weight="700"
      class="mb-30"
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Ro'yxatdan o'tish
    </AppText>

    <!--
      <AppButton theme="transparent"
                   sides="20"
                   radius="50"
                   class="w-100 bordered mb-20"
        >

          <img src="/svg/google.svg"
               class="mr-20"
               alt="">

          Sign in with Google

        </AppButton>

        <div class="sign-in-with-email mb-20">
          <AppText
                  class="color-text"
                  size="12"
                  line-height="14"
                  style="background-color: white; padding: 5px 17px;"
          >
            Or sign in with the E-mail
          </AppText>
        </div>

    -->
    <br />

    <div class="form-group">
      <BaseInput
        v-model="form.firstName"
        type="text"
        vid="name"
        rules="required|max:255"
        label="Ism"
      />
    </div>

    <div class="form-group">
      <BaseInput
        v-model="form.lastName"
        type="text"
        vid="name"
        rules="required|max:255"
        label="Familiya"
      />
    </div>

    <div class="form-group">
      <BaseInput
        v-model="form.login"
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
        v-model="form.password"
        :type="passwordField ? 'text' : 'password'"
        vid="name"
        rules="required|max:255"
        label="Parol"
      >
        <template #append>
          <img
            src="/icons/eye.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="passwordSee"
            v-if="passwordField"
          />
          <img
            src="/icons/eye-closed2.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="passwordSee"
            v-if="!passwordField"
          />
        </template>
      </BaseInput>
    </div>

    <div class="form-group">
      <BaseInput
        v-model="form.passwordConfirmation"
        :type="passwordConfirmationField ? 'text' : 'password'"
        vid="name"
        rules="required|max:255"
        label="Parolni takrorlang"
      >
        <template #append>
          <img
            src="/icons/eye.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="confirmationSee"
            v-if="passwordConfirmationField"
          />
          <img
            src="/icons/eye-closed2.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="confirmationSee"
            v-if="!passwordConfirmationField"
          />
        </template>
      </BaseInput>
    </div>

    <BlockWrap
      :count="isDesktopSmall ? 1 : 2"
      offset-y="20"
      offset-x="5"
      width-auto=""
      class="mb-30"
    >
      <BaseCheckbox title="Roziman" size="18" />
      <span class="weight-700" style="color: #008AE4!important">
        Qoidalar & Shartlarga
      </span>
    </BlockWrap>

    <AppButton
      sides="20"
      class="w-100 mb-30"
      font-size="14"
      theme="main"
      radius="50"
      @click="registerUser('input')"
    >
      Ro'yxatdan o'tish
    </AppButton>
    <AppText
      size="14"
      weight="700"
      line-height="17"
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Akkountingiz bormi ?
      <router-link
        style="color: #008AE4!important; margin-left: 5px;"
        to="/sign-in"
      >
        Tizimga kiring
      </router-link>
    </AppText>
  </div>
</template>

<script>
import AppButton from "../../shared-components/AppButton";
import BaseInput from "../../shared-components/BaseInput";
import BlockWrap from "../../shared-components/BlockWrap";
import BaseCheckbox from "../../shared-components/BaseCheckbox";

export default {
  name: "register",
  components: {
    BaseCheckbox,
    BlockWrap,
    BaseInput,
    AppButton,
  },
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        telefon: null,
        login: "",
        password: "",
        passwordConfirmation: "",
      },
      passwordField: false,
      passwordConfirmationField: false,
    };
  },
  methods: {
    passwordSee() {
      this.passwordField = !this.passwordField;
    },
    confirmationSee() {
      this.passwordConfirmationField = !this.passwordConfirmationField;
    },
    registerUser() {
      this.loading = true;
      this.$api
        .post("admin/Management/register/user", this.form)
        .then((res) => {
          if (!res.error) {
            this.$router.push({ name: "login" });
            console.log("oxshadi");
          } else {
            console.log("im here baby");
            this.errorNotification(res.error);
          }
        })
        .catch((err) => {
          this.errorNotification(err.response.data.error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    createLinkFormData() {
      let form = new FormData();
      form.append("lastName", this.form.lastName);
      form.append("firstName", this.form.firstName);
      form.append("telefon", "998931880416");
      form.append("password", this.form.password);
      return form;
    },
  },
};
</script>

<style scoped></style>

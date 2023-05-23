<template>
  <section class="section py-30">
    <div class="container">
      <app-text
        :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
        :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
        weight="700"
        class="mb-30 text-center color-main"
      >
        {{ $t("Anketa") }}
      </app-text>
      <el-form
        label-position="top"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        style="
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          padding: 20px;
          margin-bottom: 30px;
          border-radius: 15px;
        "
      >
        <div class="items">
          <el-form-item :label="$t('ism')">
            <el-input v-model="ruleForm.firstname"></el-input>
          </el-form-item>
          <el-form-item :label="$t('familiya')">
            <el-input v-model="ruleForm.lastname"></el-input>
          </el-form-item>
          <el-form-item :label="$t('tel')">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item :label="$t('yosh')">
            <el-input v-model="ruleForm.age"></el-input>
          </el-form-item>
        </div>
        <div style="max-width: 300px; margin: 0 auto">
          <app-button
            sides="20"
            class="mb-30 w-100"
            font-size="14"
            theme="main"
            @click="submitForm('ruleForm')"
          >
            {{ $t("Yuborish") }}
          </app-button>
        </div>
      </el-form>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.6035703507787!2d69.21581054552442!3d41.307737466187774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1f8365179b%3A0xa2d2db9aa56870c0!2sYuksalish%20maktabi!5e0!3m2!1suz!2sus!4v1680693112352!5m2!1suz!2sus"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style="border: 0px; width: 100%; height: 400px"
      ></iframe>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "AppContact",
  components: { AppButton },
  data() {
    return {
      ruleForm: {
        firstname: "",
        lastname: "",
        tel: "",
        age: "",
      },
      rules: {
        firstname: [
          {
            required: true,
            message: "Maydon bo'sh bo'lmasligi kerak!",
            trigger: "blur",
          },
          {
            min: 3,
            max: 30,
            message: "Belgilar soni ",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.items {
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
.el-input__inner {
  height: 50px !important;
  line-height: 40px !important;
}
.el-form-item__label {
  font-size: 16px;
  font-weight: 600;
  padding: 0 0 0px !important;
}
.el-form-item {
  margin-bottom: 0px;
}
@media (max-width: 576px) {
  .items {
    grid-template-columns: 1fr;
  }
}
</style>

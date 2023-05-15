<template>
  <section class="section py-30">
    <div class="container">
      <div class="section__top mb-30">
        <div class="section__top-left">
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10"
          >
            Yuksalish maktabi o'quvchilari uchun test topshirish tizimi
          </app-text>

          <app-text
            :size="isMobileSmall ? 12 : 14"
            :line-height="isMobileSmall ? 16 : 26"
            weight="500"
          >
            Davlat standarti asosida tuzilgan 1-8 sinflarga oid test
            savollaridan foydalangan holda test topshirish imkoni
          </app-text>
        </div>
      </div>
      <div class="test">
        <div class="test__logo mb-10">
          <img src="/images/logo.png" alt="" />
        </div>
        <app-text class="color-white" size="16" line-height="24">
          Ta'lim va tarbiya birlashgan dargoh
        </app-text>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AppTest",
  components: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(8, 15, 70);
}
</style>

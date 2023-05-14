<template>
  <div class="home-page">
    <HeroBanner />
    <div class="container">
      <news />
      <GalleryClass />
      <!-- 
      <CtaBanner
        title="Miramanda o'qiting"
        content="Dunyo bo'ylab eng yaxshi o'qituvchilar millionlab talabalarga dars berishadi. Biz sizga sevgan narsangizni o'rgatish uchun vositalar va ko'nikmalarni taqdim etamiz."
        photo="/images/cta-banner-2.png"
        buttonText="Hoziroq boshlang"
      /> -->
    </div>
  </div>
</template>

<script>
import News from "@/components/pages/home/News.vue";
import HeroBanner from "../../../components/pages/home/HeroBanner";
import GalleryClass from "@/components/pages/home/GalleryClass.vue";

export default {
  name: "AppHome",
  components: {
    HeroBanner,
    News,
    GalleryClass,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>

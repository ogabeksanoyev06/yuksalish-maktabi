<template>
  <section class="py-30">
    <div class="section__top mb-30" data-aos="fade-right">
      <div>
        <app-text
          :size="isMobile ? 18 : 24"
          :line-height="isMobile ? 28 : 36"
          weight="700"
        >
          Yangiliklar
        </app-text>
        <app-text size="14" line-height="18" weight="500" class="color-text">
          Yangiliklardan boxabar bo‘ling
        </app-text>
      </div>

      <div class="section__top-details">
        <router-link class="section__top-link" to="/news">
          <span> Barcha yangililar</span>
        </router-link>
      </div>
    </div>
    <BlockWrap :count="isMobileSmall ? 1 : isDesktopSmall ? 2 : 3">
      <AppNewsCard
        v-for="(item, index) in 3"
        :key="index"
        data-aos="zoom-in-up"
        :data-aos-delay="index * 50"
        data-aos-duration="20000"
      />
    </BlockWrap>
  </section>
</template>
<script>
import AppNewsCard from "@/components/shared-components/AppNewsCard.vue";
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
export default {
  name: "NewsPage",
  components: { AppNewsCard, BlockWrap },
  data() {
    return {};
  },
  methods: {
    goToLink(newsId) {
      this.$router.push({
        name: "newsId",
        params: { newsId: newsId },
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>

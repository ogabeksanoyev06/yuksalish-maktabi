<template>
  <div class="section py-30">
    <div class="container">
      <div class="section__top mb-30" data-aos="fade-right">
        <app-text
          :size="isMobile ? 18 : 30"
          :line-height="isMobile ? 28 : 36"
          weight="700"
        >
          {{ $t("NewsTitle") }}
        </app-text>
      </div>
      <loader v-if="loading" />
      <div v-else>
        <BlockWrap
          :count="
            isMobileSmall ? 1 : isDesktopSmall ? 2 : isDesktopMedium ? 3 : 4
          "
        >
          <div
            class="page__news"
            v-for="(item, index) in list"
            :key="index"
            :data-aos-delay="index * 50"
            data-aos="fade-up"
            data-aos-duration="20000"
            @click="goToLink(item.id)"
          >
            <div class="page__news-photo">
              <img :src="'http://yuksalishmaktabi.uz' + item.img" />
            </div>
            <div class="page__news-content">
              <div class="page__news-title">
                {{ item[$localeKey("name")] }}
              </div>
              <div class="d-flex flex-wrap justify-space-between">
                <span class="section" style="color: #44494f">
                  {{ $t("NewsTitle") }}</span
                >
                <span class="date" style="color: #9fabb9; text-align: right">
                  29 Aprel 2023
                </span>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </BlockWrap>
      </div>
    </div>
  </div>
</template>
<script>
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
import Loader from "@/components/shared-components/Loader.vue";
export default {
  name: "AppNews",
  components: { BlockWrap, Loader },
  data() {
    return {
      list: [],
      loading: true,
    };
  },
  methods: {
    goToLink(newsId) {
      this.$router.push({
        name: "detailed-news",
        params: { newsId: newsId },
      });
    },
    async getNews() {
      this.loading = true;
      try {
        await this.$api
          .get("news/")
          .then((data) => {
            if (!data.error && data) {
              this.list = data;
            }
          })
          .catch((error) => {
            console.log("Error on getting News" + ": " + error);
            this.loading = false;
          })
          .finally(() => {
            this.loading = false;
          });
      } catch (e) {
        console.log(e);
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>
<style lang="scss" scoped>
.page__news {
  $self: &;
  $trans: 0.2s;
  position: relative;
  max-width: 400px;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  min-height: 287px;
  transition: all 0.3s;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .line {
      width: 80%;
    }
  }
  &-photo {
    img {
      width: 400px;
      max-width: 100%;
      height: 100%;
      max-height: 204px;
      -o-object-fit: contain;
      object-fit: contain;
      border-radius: 4px;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 20px 14px;
    height: 120px;
    text-align: left;
  }
  &-title {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 21px;
    color: #44494f;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 16px;
  }
  .line {
    width: 10%;
    height: 2px;
    background: #6db0ff;
    transition: all 0.5s;
    position: absolute;
    bottom: 0;
  }
  .section,
  .date {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 20px;
  }
}
.pagination-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>

<template>
  <div class="card__news" @click="goToLink(1)">
    <div class="card__news-photo">
      <img src="https://tsue.uz/media/news/photo_2023-04-29_11-20-08.jpg" />
    </div>
    <div class="card__news-content">
      <div class="card__news-title">
        TDIU talabalari kelgusida o‘qishni Indoneziyada davom ettirishadi
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
</template>
<script>
export default {
  name: "AppCardNews",
  components: {},
  props: {
    id: Number,
    title: String,
    photo: String,
    date: Number,
  },
  data() {
    return {};
  },
  methods: {
    goToLink(id) {
      this.$router.push({
        name: "detailed-news",
        params: { newsId: id },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.card__news {
  $self: &;
  $trans: 0.3s;
  position: relative;
  max-width: 400px;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  min-height: 326px;
  transition: all 0.3s;
  margin-top: 15px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    transform: translateY(-5px) !important;
    // box-shadow: 0 3px 18px rgba(0, 0, 0, 0.2), 0 8px 30px rgba(0, 0, 0, 0.07);
    .line {
      width: 80%;
    }
  }
  &-photo {
    img {
      width: 100%;
      height: 204px;
      -o-object-fit: cover;
      object-fit: cover;
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
    font-size: 1.125rem;
    line-height: 24px;
    color: #44494f;
    margin-bottom: 22px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .line {
    width: 10%;
    height: 2px;
    border-radius: 4px 4px 0 0;
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
</style>

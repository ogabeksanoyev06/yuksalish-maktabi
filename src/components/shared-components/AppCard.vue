<template>
  <div class="app-card" :class="{ 'news-card--medium': medium }">
    <div class="app-card__photo">
      <img :src="photo" :alt="title" />
      <div class="app-card__price">
        <h5>{{ price }}</h5>
      </div>
    </div>
    <div class="app-card__content">
      <div class="app-card__link" @click="goToLink">
        <img src="/icons/redirect.svg" alt="" />
      </div>
      <AppRating :value="value" class="mb-10" />
      <app-text
        :size="isMobile ? 16 : 18"
        class="app-card__title mb-10"
        max-lines="2"
        line-height="24"
        weight="700"
        tag="h3"
      >
        {{ title }}
      </app-text>
      <app-text
        class="color-trans-04"
        size="14"
        line-height="20"
        weight="500"
        max-lines="4"
        >{{ subtitle }}
      </app-text>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/components/app-card.scss";
import AppRating from "./AppRating";

export default {
  name: "AppCard",
  components: { AppRating },
  props: {
    id: Number,
    link: String,
    title: String,
    subtitle: String,
    photo: String,
    medium: Boolean,
    value: null,
    price: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    goToLink() {
      this.$router.push({
        name: "detailed-page",
        params: { course_id: this.id },
      });
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="cta__banner">
    <div class="cta__banner-photo">
      <img :src="photo" alt="" />
    </div>

    <div
      class="cta__banner-content"
      :class="isDesktopSmall ? 'pa-30' : 'pa-60'"
    >
      <app-text class="color-text mb-30" size="16" line-height="24">
        {{ content }}
      </app-text>
    </div>
  </div>
</template>

<script>
// import AppButton from "../../shared-components/AppButton";
export default {
  name: "CtaBanner",
  components: {},
  props: {
    title: String,
    content: String,
    photo: String,
    link: String,
    buttonText: String,
  },
};
</script>

<style lang="scss" scoped>
.cta__banner {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background: #f5f9fd;

  &-photo {
    max-width: 450px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-content {
    width: calc(100% - 450px);
  }
}

@media (max-width: 991px) {
  .cta__banner-photo {
    max-width: 40%;
  }

  .cta__banner-content {
    width: calc(100% - 40%);
  }
}

@media (max-width: 650px) {
  .cta__banner {
    flex-direction: column;
    width: 100%;
    align-items: center;

    &-photo {
      max-width: 100%;
    }

    &-content {
      width: 100%;
      padding: 20px;
    }
  }
}
</style>

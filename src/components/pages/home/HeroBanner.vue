<template>
  <div class="preview main-header">
    <div style="position: fixed; top: 0; left: 0; width: 100%; z-index: 100">
      <AppHeader />
    </div>
    <div class="container">
      <div class="preview_content">
        <p class="preview_content-title">{{ $t("title") }}</p>
        <p class="preview_content-text">{{ $t("text") }}</p>
      </div>
    </div>
    <div class="preview_shadow">
      <div :class="!isMobile ? 'preview-img' : 'preview-imgMob'">
        <video class="preview-video" autoplay loop muted playsinline>
          <source src="/images/header.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/default/app-header/AppHeader.vue";
export default {
  name: "HeroBanner",
  components: { AppHeader },
  data() {
    return {
      search: "",
    };
  },
  mounted() {
    //
  },
};
</script>

<style lang="scss">
.preview {
  width: 100%;
  height: calc(100vh + 18px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.preview .imgg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.preview_shadow {
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  filter: brightness(0.5);
}

.preview_shadow .preview-img {
  height: calc(100vh + 18px);
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.preview-video {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.preview_content {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-title {
    font-size: 45px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  &-text {
    font-size: 20px;
    letter-spacing: 10px;
    color: #fff;
  }
}
.main-header .logo-box {
  width: 100%;
  position: relative;
}
.main-header .logotip {
  max-width: calc(19.28571px + 31.80804vw);
  height: calc(31.42857px + 11.38393vw);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.preview_shadow .preview-imgMob {
  filter: brightness(60%);
  display: block;
  width: 100%;
  height: calc(100vh);
  -o-object-fit: cover;
  object-fit: cover;
}
@media (max-width: 1024px) {
  .preview {
    height: 350px;
  }
  .preview_shadow .preview-img {
    height: 350px;
  }
}
@media (max-width: 768px) {
  .preview {
    width: 100%;
    height: calc(100vh);
  }
  .preview_shadow {
    height: 100%;
    filter: brightness(0.8);
  }
}
</style>

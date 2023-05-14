<template>
  <section class="section py-30">
    <div class="container">
      <div class="section__top mb-30" data-aos="fade-right">
        <div>
          <app-text
            :size="isMobile ? 18 : 24"
            :line-height="isMobile ? 28 : 36"
            weight="700"
          >
            Gallereya
          </app-text>
          <app-text size="14" line-height="18" weight="500" class="color-text">
            Darslardan foto lavhalar
          </app-text>
        </div>
      </div>
      <div>
        <AppSlider :list="gallery" :slideCount="4" :perPage="3" class="mb-30">
          <template #default="{ item }">
            <div class="photo__item">
              <img :src="item.image" alt="" style="" />
              <div class="text">
                <h5>Tanlov g‘olibi</h5>
                <h6>Maftuna Normatova</h6>
                <p>O‘z ustimda ishladim, rivojlandim</p>
              </div>
            </div>
          </template>
        </AppSlider>
      </div>
    </div>
  </section>
</template>
<script>
import AppSlider from "../../../components/shared-components/AppSlider";

export default {
  name: "GalleryClass",
  components: { AppSlider },
  data() {
    return {
      gallery: [
        {
          id: 0,
          image: "https://yuksalish-maktabi.vercel.app/lesson_imgs/lesson3.png",
        },
        {
          id: 1,
          image: "https://yuksalish-maktabi.vercel.app/lesson_imgs/lesson3.png",
        },
        {
          id: 2,
          image: "https://yuksalish-maktabi.vercel.app/lesson_imgs/lesson3.png",
        },
        {
          id: 1,
          image: "https://yuksalish-maktabi.vercel.app/lesson_imgs/lesson3.png",
        },
        {
          id: 2,
          image: "https://yuksalish-maktabi.vercel.app/lesson_imgs/lesson3.png",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.photo__item {
  position: relative;
  overflow: hidden;
  max-width: 100%;
  height: 300px;

  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, rgba(32, 56, 79, 0), #20384f 80%);
  }
  .text {
    position: absolute;
    z-index: 3;
    bottom: 0px;
    left: 0;
    width: 100%;
    padding: 10px;
    transform: translateY(100%);
    transition: all 0.7s ease-in;
    h5 {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #fff;
    }
    h6 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.01em;
      color: #fff;
      margin-top: 4px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #fff;
      margin-top: 4px;
      overflow: hidden;
      transition: all 0.7s ease-in;
    }
  }
}
.photo__item:hover .text {
  transform: translateY(0);
  transition: all 0.7s ease-in;
}
</style>

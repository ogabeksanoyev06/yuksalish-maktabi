<template>
  <div class="home-page">
    <div
      style="
        background: url('https://stesting.uz/stestinglandingbg.png') no-repeat
          50%;
        background-size: cover;
      "
    >
      <div class="container">
        <div class="about">
          <div class="card__photo" data-aos="fade-right">
            <img
              src="https://yuksalish-maktabi.vercel.app/images/muhammadaliEshonqulov.jpg"
              alt=""
            />
            <a
              href="https://www.youtube.com/watch?v=rtWW7nRu4II&t=2s"
              target="_blank"
            >
              <button class="card__play">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 11 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 6.13397C11.1667 6.51888 11.1667 7.48112 10.5 7.86602L1.5 13.0622C0.833332 13.4471 3.43203e-07 12.966 3.76852e-07 12.1962L8.31114e-07 1.80385C8.64763e-07 1.03405 0.833334 0.552922 1.5 0.937822L10.5 6.13397Z"
                    fill="#00D06C"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
          <div class="text" data-aos="fade-left">
            <app-text
              :size="isMobile ? 26 : 30"
              :line-height="isMobile ? 30 : 36"
              weight="600"
              class="mb-10 text-center color-main"
            >
              {{ $t("title") }}
            </app-text>
            <app-text
              class="color-text"
              size="16"
              line-height="24"
              letterSpacing="1.5"
            >
              {{ $t("textM") }}
            </app-text>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div style="padding: 40px 0; margin-top: 20px">
        <div class="section__top mb-30" data-aos="fade-right">
          <div>
            <app-text
              :size="isMobile ? 18 : 30"
              :line-height="isMobile ? 28 : 36"
              weight="700"
            >
              Bizning kutubxona
            </app-text>
            <app-text
              size="14"
              line-height="18"
              weight="500"
              class="color-text"
            >
              Biz bilan natijaga erishing
            </app-text>
          </div>
        </div>

        <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in 5" :key="index">
            <div class="item">
              <a
                href=""
                style="
                  padding: 0 15px;
                  display: block;
                  text-align: center;
                  text-decoration: none;
                  font-size: 1.2em;
                  color: #3c495a;
                  font-weight: 600;
                "
              >
                <img
                  src="https://uzbmb.uz/upload/file/menu/service/nm/Matematika.jpg"
                  alt="service"
                  style="width: 60%; display: block; margin: auto"
                />
                <span>Matematika</span>
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <news />
      <GalleryClass />
    </div>
  </div>
</template>

<script>
import News from "@/components/pages/home/News.vue";
import GalleryClass from "@/components/pages/home/GalleryClass.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "AppHome",
  components: {
    News,
    GalleryClass,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      mySwiper: null, // Swiper o'zgaruvchisi
      swiperOptions: {
        autoplay: {
          delay: 4000, // ms dan keyinroq autoplayni to'xtatish uchun
          disableOnInteraction: false, // foydalanuvchi ro'yxatdan o'tganida autoplayni to'xtatish
        },
        loop: true, // sliderda loop yoqish
        speed: 500, // o'tish tezligi
        breakpoints: {
          400: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          990: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        },
        spaceBetween: 30,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.about {
  display: flex;
  border-radius: 15px;
  align-items: center;
  padding: 10px;
  margin-top: 60px;
}
.card__photo {
  max-width: 650px;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 15px;
  }
}
.card__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: 0.3s;
  svg {
    width: 100%;
    margin-top: 2px;
    margin-left: 7px;
    -o-object-fit: contain;
    object-fit: contain;
  }
}
.text {
  width: calc(100% - 650px);
  padding: 30px;
}
@media (max-width: 991px) {
  .about {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .text {
    width: 100%;
    padding: 10px;
  }
}
</style>

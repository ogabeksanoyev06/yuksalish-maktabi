<template>
  <div class="home-page">
    <div class="container">
      <div class="about py-30 mt-20">
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
            Yuksalish maktabi
          </app-text>
          <app-text
            class="color-text"
            size="16"
            line-height="24"
            letterSpacing="1.5"
          >
            Muhammad Ali Eshonqulov - Xalqaro toifadagi iqtisodchi, Biznes va
            Shaxsiy Rivojlanish bo'yicha trener Patronlar ligasi, Biznes Kvadrat
            va Yuksalish loyihasining asoschisi Bizning maktabimizda 1-sinfdan
            8-sinfgacha bòlgan òquvchilar òqishadi. Darslarimiz ertalab soat
            9:00 dan 17:30 gacha bòlgan vaqt oraliģida bòlib òtadi. Ya'ni:
            Davlat ta'lim standarti (DTS) bòyicha darslar 13:00 ga qadar, 13:00
            dan 16:30 gacha bòlgan vaqtda chuqurlashtirib òrgatiladigan fanlar,
            16:30 dan 17:20 gacha bòlgan vaqtda, haftada 3 kun òģil bolalar
            uchun Taekwondo sport tògaraklari,qizlarimiz uchun Gimnastika sport
            tògaraklari bòlib òtadi. Bizda chet tillaridan Arab tili va Ingliz
            tili, Aniq fanlardan Matematika hamda Fizika fanlari
            chuqurlashtirilib òqitiladi.
          </app-text>
        </div>
      </div>
      <news />
      <GalleryClass />
    </div>
  </div>
</template>

<script>
import News from "@/components/pages/home/News.vue";
import GalleryClass from "@/components/pages/home/GalleryClass.vue";

export default {
  name: "AppHome",
  components: {
    News,
    GalleryClass,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.about {
  display: flex;
  border-radius: 15px;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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

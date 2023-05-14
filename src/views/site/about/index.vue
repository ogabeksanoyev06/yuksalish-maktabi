<template>
  <section class="section py-30">
    <div class="container">
      <div class="mb-60">
        <app-text
          :size="isMobile ? 18 : 26"
          :line-height="isMobile ? 28 : 36"
          weight="700"
          class="color-main mb-20"
        >
          Maktabning tashkil topishi
        </app-text>
        <cta-banner
          title="Miramanda o'qiting"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quidem minima repudiandae officia veniam sint dolor ex dolorum voluptatem porro aperiam nemo distinctio commodi culpa, numquam neque molestias. Quod quas quasi reiciendis hic voluptatem necessitatibus repellendus eveniet illum mollitia maxime, at inventore. Repellendus, ad! Doloremque est minus voluptatum dignissimos ipsam quas alias exercitationem veniam esse tenetur praesentium qui, voluptatibus natus consequatur ex illum omnis amet dolorum assumenda ut cupiditate aperiam enim. Nam adipisci qui mollitia placeat laudantium exercitationem fugit accusamus inventore cumque non praesentium, aliquid aliquam facilis! In commodi obcaecati dolorem amet. Ad consequatur veritatis porro molestiae, ab cupiditate placeat?"
          photo="https://yuksalish-maktabi.vercel.app/lesson_imgs/lesson5.png"
          buttonText="Hoziroq boshlang"
        />
      </div>

      <div class="mb-60">
        <app-text
          :size="isMobile ? 18 : 26"
          :line-height="isMobile ? 28 : 36"
          weight="700"
          class="color-main mb-20"
        >
          Maktabning funksional vazifalari va maqsadi
        </app-text>
        <div class="benefits mb-30">
          <div class="benefits__item" v-for="(item, index) in 10" :key="index">
            <img src="/svg/check-round.svg" class="mr-15" alt="" />
            <AppText
              :size="isMobileSmall ? 16 : 18"
              :line-height="isMobileSmall ? 18 : 24"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              doloribus.
            </AppText>
          </div>
        </div>
      </div>
      <div class="">
        <app-text
          :size="isMobile ? 18 : 26"
          :line-height="isMobile ? 28 : 36"
          weight="700"
          class="color-main mb-20"
        >
          Bizning jamoa
        </app-text>
        <div class="items">
          <div class="item" v-for="item in 5" :key="item">
            <div class="img-wrap">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                class="lazyLoad isLoaded"
              />
            </div>
            <h6>Muhammadali Eshonqulov Olimjon o'g'li</h6>
            <p class="short-txt">
              Markaz rahbari <br />
              Qabul kuni: Juma — 15:00 — 17:00
            </p>
            <ul>
              <li>
                <i>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.33549 1.62331C0.55192 1.26496 1.74439 -0.0384768 2.59536 0.000872147C2.84973 0.0219519 3.0746 0.175834 3.2573 0.35431C3.67681 0.763961 4.87771 2.31333 4.94587 2.63936C5.11171 3.43899 4.15886 3.89993 4.45047 4.70588C5.19393 6.52507 6.47494 7.80602 8.29492 8.54873C9.10021 8.84033 9.56118 7.88753 10.3608 8.05406C10.6862 8.12222 12.2363 9.32306 12.646 9.74255C12.8238 9.92454 12.9784 10.1501 12.9995 10.4045C13.0311 11.3003 11.6468 12.5096 11.3769 12.6642C10.7403 13.1195 9.90972 13.1118 8.89713 12.641C6.07159 11.4655 1.55607 7.0352 0.358679 4.103C-0.0994784 3.09609 -0.1311 2.25992 0.33549 1.62331Z"
                      fill="#3973A9"
                    ></path>
                  </svg>
                </i>
                <a href="tel:71- 239-58-73">+998 91 123 45 67</a>
              </li>
              <li>
                <i>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.01788 0.0415039H8.5175C9.31048 0.0503979 10.0652 0.385629 10.606 0.969122C11.1467 1.55262 11.4262 2.33344 11.3794 3.12974V6.93767C11.4262 7.73397 11.1467 8.51479 10.606 9.09829C10.0652 9.68178 9.31048 10.017 8.5175 10.0259H3.01788C1.3146 10.0259 0.166626 8.64023 0.166626 6.93767V3.12974C0.166626 1.42718 1.3146 0.0415039 3.01788 0.0415039Z"
                      fill="#3973A9"
                    ></path>
                    <path
                      d="M9.07281 3.28564L6.58463 5.28897C6.11376 5.65814 5.45368 5.65814 4.9828 5.28897L2.47327 3.28564"
                      stroke="#D7E3EE"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </i>
                <a href="mailto:info@argos.uz">v.karimov@tsue.uz</a>
              </li>
            </ul>
            <AppButton
              theme="secondary"
              :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
              :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
              :class="isMobileMedium ? 'mr-10' : 'mr-20'"
              v-if="!isDesktopSmall"
              height="40"
              class="w-100"
            >
              Vazifalari
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CtaBanner from "@/components/pages/home/CtaBanner.vue";
import AppButton from "@/components/shared-components/AppButton";

export default {
  name: "AppAbout",
  components: { CtaBanner, AppButton },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  .item {
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 30px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.02), 0 8px 30px rgba(0, 0, 0, 0.04);
    max-width: 350px;
    width: 100%;
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 3px 18px rgba(0, 0, 0, 0.2), 0 8px 30px rgba(0, 0, 0, 0.07);
    }
    .img-wrap {
      margin-bottom: 20px;
      text-align: center;
      height: 260px;
      img {
        border-radius: 6px;
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    h6 {
      transition: all 0.3s;
      color: #3973a9;
      margin-bottom: 8px;
      min-height: 30px;
      font-size: inherit;
    }
    p {
      color: #6a7793;
      font-size: 0.9rem;
      margin-bottom: 16px;
    }
    ul li {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      i {
        background: rgba(57, 115, 169, 0.2);
        min-width: 28px;
        width: 28px;
        border-radius: 4px;
        height: 28px;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      a {
        color: #6a7793;
        opacity: 0.6;
        font-size: 0.9rem;
      }
    }
  }
}
.benefits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #e5ecf5;
  width: 100%;

  &__item {
    display: flex;
    align-items: center;
  }
}
@media (max-width: 1200px) {
  .items {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}
@media (max-width: 768px) {
  .items {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 0px !important;
    .item {
      margin-bottom: 15px;
    }
  }
  .benefits {
    grid-template-columns: 1fr;
  }
}
</style>

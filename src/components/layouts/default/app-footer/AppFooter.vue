<template>
  <footer class="footer" :class="isDesktopSmall ? 'py-30' : 'py-60'">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left">
          <router-link to="/" class="footer__logo">
            <img src="/images/logo.png" alt="" />
          </router-link>
          <div class="footer__details">
            <div class="footer__details-item">
              <app-text
                :size="isMobile ? 16 : 18"
                :line-height="isMobile ? 18 : 21"
                weight="600"
                class="mb-20"
              >
                {{ $t("Bog'laning") }}
              </app-text>

              <div class="footer__contacts-item">
                <div class="footer__contacts-icon">
                  <img src="/icons/phone.svg" alt="" />
                </div>

                <a href="tel: +998 91 123-45-67">
                  <app-text size="14" line-height="17" weight="600">
                    +998 91 123-45-67
                  </app-text>
                </a>
              </div>

              <div class="footer__contacts-item">
                <div class="footer__contacts-icon">
                  <img src="/icons/location.svg" alt="" />
                </div>

                <app-text size="14" line-height="17" weight="600">
                  Toshkent shahri, Chilonzor tumani Muqimiy ko'chasi 1 uy
                </app-text>
              </div>
            </div>
            <div class="footer__details-item">
              <app-text
                :size="isMobile ? 16 : 18"
                :line-height="isMobile ? 18 : 21"
                weight="600"
                class="mb-20"
              >
                {{ $t("Link") }}
              </app-text>

              <div class="footer__links">
                <router-link to="/categories" tag="a">
                  {{ $t("Biz haqimizda") }}
                </router-link>
                <router-link to="/subjects" tag="a">{{
                  $t("Yangiliklar")
                }}</router-link>
                <router-link to="/teaching" tag="a">
                  {{ $t("O'quvchilar ishlari") }}
                </router-link>
                <router-link to="/choose-test" tag="a">{{
                  $t("Online test")
                }}</router-link>
                <router-link to="/choose-test" tag="a">{{
                  $t("Bog'lanish")
                }}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__socials">
            <app-text
              weight="600"
              :size="isMobile ? 16 : 18"
              line-height="21"
              class="mb-20"
            >
              {{ $t("Tarmoqlar") }}
            </app-text>

            <div class="footer__socials-wrap">
              <a
                href="https://www.facebook.com/yuksalishmaktablari"
                target="_blank"
                class="footer__socials-item"
              >
                <img src="/icons/facebook.svg" alt="" />
              </a>

              <a
                href="https://www.instagram.com/yuksalish_maktablari/"
                class="footer__socials-item"
                target="_blank"
              >
                <img src="/icons/instagram.svg" alt="" />
              </a>

              <a
                href="https://t.me/yuksalish_maktablari"
                class="footer__socials-item"
                target="_blank"
              >
                <img src="/icons/telegram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import "./footer.scss";

export default {
  name: "AppFooter",
};
</script>

<style scoped></style>
